export const CardsHome = () =>{
    return(
        <>
        <hr className="border-2"/>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-10 mb-28 text-center">
            
            <div className="flex flex-col justify-center items-center mb-10">      
                <a href="/personajes">
                    <img src="/img/2.jpg" alt="" className="rounded-lg md:w-52 md:h-72 w-72 h-96 object-cover "/>
                    <button className=" text-black bg-amber-300 hover:bg-amber-200 font-bold py-2 px-14 mt-5 rounded-md shadow-lg">VER MÁS</button>
                </a>
            </div>

            <div className="flex flex-col justify-center items-center mb-10">
                <a href="/books">
                    <img src="/img/3.jpg" alt="" className="rounded-lg md:w-52 md:h-72 w-72 h-96 object-cover"/>
                    <button className=" text-black bg-amber-300 hover:bg-amber-200 font-bold py-2 px-14 mt-5 rounded-md shadow-lg">VER MÁS</button>
                </a>
            </div>

            <div className="flex flex-col justify-center items-center mb-10">    
                <a href="/trivias">
                    <img src="/img/4.jpg" alt="" className="rounded-lg md:w-52 md:h-72 w-72 h-96 object-cover"/>
                    <button className=" text-black bg-amber-300 hover:bg-amber-200 font-bold py-2 px-14 mt-5 rounded-md shadow-lg">VER MÁS</button>
                </a>
            </div>

            <div className="flex flex-col justify-center items-center mb-10">
                     
                <a href="/spells">
                    <img src="/img/5.jpg" alt="" className="rounded-lg md:w-52 md:h-72 w-72 h-96 object-cover"/>
                    <button className=" text-black bg-amber-300 hover:bg-amber-200 font-bold py-2 px-14 mt-5 rounded-md shadow-lg">VER MÁS</button>
                </a>
                
            </div>
        </div>
        </>
    )
}