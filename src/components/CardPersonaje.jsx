import { GryffindorSVG, HufflepufSVG, RavenclawSVG, SlytherinSVG } from "./IconoCasas";

// eslint-disable-next-line react/prop-types

const defaultImage = "../../public/img/sinRostro.jpg"

export const CardPersonaje = ({character}) => { 
        return (
        <>
                <div className="bg-amber-200 shadow rounded-2xl border border-gray-500 overflow-hidden md:m-3 p-3 m-6 hover:bg-amber-300 transition-colors">                       
                    <div className="flex "> 
                        <img src={character.image || defaultImage} alt={character.name} className="w-auto h-48 object-cover rounded-lg  border-2 mx-3 object-top" />
                        <h2 className="text-2xl font-bold text-center mx-5 m-9">{character.name} </h2>
                        <p>{character.house == "Gryffindor" ? <GryffindorSVG />: character.house == "Slytherin" ? <SlytherinSVG /> : character.house == "Hufflepuff" ? <HufflepufSVG /> : character.house == "Ravenclaw" ? <RavenclawSVG/> : "" }</p>                       
                    </div>

                    <div className="text-md  justify-center  mx-5">    
                        <p className="text-sm font-bold items-center mx-4">{character.dateOfBirth}</p> 
                    </div>
                    
                        
                    <div >
                        <p className=" text-center">
                            <hr className="m-1 border-gray-800 "/>
                            <span className="text-md font-semibold">{character.ancestry == "half-blood" ?(<> 🩸 Sangre Mestiza</>): character.ancestry == "muggleborn" ? (<>  🩸 Padres Muggles</>) : character.ancestry == "pure-blood" ? (<>🩸 Sangre Pura</>) : character.ancestry == "squib" ? (<> 🩸 Squib</>) : character.ancestry == "muggle" ? (<> 🩸 Muggle</>): "🩸 Sin registros"  } | </span>    
                            <span className="text-md font-semibold">{character.alive === true ? (<>❤ Vivo</>) : (<>💀 Muerto</>)} | </span>                                                   
                            <span className="text-md font-semibold">{character.hogwartsStudent === true ? <> 👨‍🎓 Estudiante</> : character.hogwartsStaff === true ? <> 👨🏻‍🏫 Profesor</> : "Otro"}</span>
                        </p>
                    </div>
                                  
                </div>
        </>
    
    );
  };
