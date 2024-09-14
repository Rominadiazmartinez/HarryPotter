import { useState, useEffect } from "react" 
import { CardPersonaje } from "./CardPersonaje"


export const Characters = () =>{
    const [characters, setCharacters] = useState([])
    const [filtro, setFiltro] = useState("")

    const getData = async() =>{
        let response = await fetch("https://hp-api.onrender.com/api/characters")
        let data = await response.json()
        setCharacters(data)
        
    }

    const buscador = (e) =>{
        setFiltro(e.target.value)
    }

    useEffect(() => {
        getData();
    }, []);


    const personajesFiltrados = characters.filter(character => 
        character.name.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
                {/* Buscador */}
            <div className="text-center">    
                <div className="relative p-5 flex justify-center">
                    <input
                        value={filtro}
                        onChange={buscador}
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="rounded-full w-full py-2 pl-10 pr-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Buscar personaje"
                    />
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                        className="absolute right-9 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
                    >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>

                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3"> 
                    {personajesFiltrados.map((personaje) => (
                        <CardPersonaje key={personaje.id} character={personaje} />
                    ))}
                </div>
            </div>
        </>
    );
}