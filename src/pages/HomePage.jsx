import { Banner } from "../components/Banner"
import { CardsHome } from "../components/CardsHome"
import { Hogwarts } from "../components/Hogwarts"
import { Noticias } from "../components/Noticias"


export const HomePage = () =>{
    return(
        <>
            <Banner/>
            <Hogwarts/>
            <Noticias/>
            <CardsHome/>
        </>
    )
}