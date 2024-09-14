import { Hechizos } from "../components/Hechizos";

export const Spells = () =>{
    return (
        <div  style={{
            backgroundImage: "url('/img/background3.png')"
        }}>
            <img className="mb-5 pb-2 h-52 object-cover md:h-full" src="/img/bannerhechizos.gif" alt="Banner hechizos"/>
            <Hechizos/>
        </div>
        
    )
}