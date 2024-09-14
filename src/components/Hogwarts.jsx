import { Carousel } from "./Carousel"

export const Hogwarts = () =>{
    return(
        <>
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24 mt-20" >
            <div className=" relative rounded-xl pt-3 text-white overflow-hidden ">
                <div className="absolute inset-0" style={{
                backgroundImage: "url('../public/img/fondohome2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7,
                zIndex: -1
        }}></div>
                <h2 className="font-bold text-7xl text-center underline font-harry"> Historia de Hogwarts </h2>

                <p className="m-7 text-center">El Colegio Hogwarts de Magia y Hechicería es un internado mágico ubicado en 
                    Escocia. El castillo se ubica en unas montañas cercanas a un lago. La
                    localización exacta no ha sido descubierta ya que está escondida por los más 
                    poderosos encantamientos posibles. Sin embargo, de acuerdo con Hermione Granger,
                    no está muy lejos de Dufftown. Los encantamientos que protegen al castillo son
                    clasificados como encantamientos anti-aparición y encantos repelentes de
                    Muggles (como el repello muggletum), que lo hacen que ellos vean unas ruinas
                    antiguas con un letrero que dice: Peligro, prohibido el paso, en lugar del
                    castillo. Estos encantamientos pueden ser levantados por el Director. La 
                    mayoría de los dispositivos electrónicos no funcionan en los terrenos de 
                    Hogwarts. En un momento dado, Hogwarts llegó a tener 1000 estudiantes. 
                    <p>El lema de Hogwarts es: <span className="italic">Draco dormiens nunquam titillandus.</span> </p> 
                    <p className="font-bold">Nunca hagas cosquillas a un dragón dormido.</p>
                </p>
            </div>               
            <div>
                <Carousel/>
            </div>
        </div>
        
        </>
    )
}