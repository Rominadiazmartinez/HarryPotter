import { Characters } from "../components/Characters";

export const Personajes = () =>{
    return (
        <div style={{
            backgroundImage: "url('../public/img/background3.png')"
        }}>
            <img className="mb-5 pb-2 h-52 object-cover md:h-full" src="/img/bannerpersonajes.gif" alt="Banner personajes"/>
            <Characters/>
        </div>
        
    )
}