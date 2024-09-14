import { Libros } from "../components/Libros";

export const Books = () =>{
    return (
        <div className="pb-20" style={{
            backgroundImage: "url('/img/background3.png')"
        }}>
            <img className="mb-5 pb-2 h-52 object-cover md:h-full" src="../../public/img/bannerlibros.gif" alt="Banner libros" />
            <Libros/>
        </div>
        
    )
}