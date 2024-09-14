

export const CardLibro = ({book, image}) =>{
    return(
        <>
            <div className="shadow rounded-2xl border border-gray-500 overflow-hidden m-3 mt-10 p-3 h-auto flex items-center " style={{
                backgroundImage: "url('../public/img/backgroundmagic2.jpg')"
            }}>
                <div className="flex flex-col items-center m-2 md:flex-row  ">
                    <img src={image} alt="Portada libro" className=" md:h-96 mb-6 rounded-lg m-2" />
                    <div className="">
                        <h2 className="text-3xl font-bold text-center ">{book.libro}</h2>
                        <p> Fecha de lanzamiento: {book.fecha_de_lanzamiento}</p>
                        <hr className="mx-16 border-gray-800 mt-3 "/>
                        <p className="m-5">{book.descripcion}</p>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}