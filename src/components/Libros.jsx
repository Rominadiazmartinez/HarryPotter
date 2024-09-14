import { useState, useEffect } from "react" 
import { CardLibro } from "./CardLibro"

const imagenesLibros ={
    "1": "/img/libro1.jpg",
    "2": "/img/libro2.jpg",
    "3": "/img/libro3.jpg",
    "4": "/img/libro4.jpg",
    "5": "/img/libro5.jpg",
    "6": "/img/libro6.jpg",
    "7": "/img/libro7.jpg",
    "8": "/img/libro8.jpeg"
}

export const Libros = () =>{
    const [libros, setLibros] = useState([])
 
    const getData = async() =>{
        try {
            let response = await fetch("/dataBase/libros.json")
            let data = await response.json()
            setLibros(data.libros)
        } catch (error) {
            console.log(error)
        }             
    }

    useEffect(() => {
        getData();
    }, [])

    

    return(
        <>
        <div className="text-center">    
                <div className="grid md:grid-cols-2 grid-cols-1 "> 
                    {libros.map((libro) => (
                        < CardLibro key={libro.id} book={libro} image={imagenesLibros[libro.id]} />
                    ))}
                </div>
            </div>
        </>
    )
}