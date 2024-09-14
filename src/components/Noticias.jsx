export const Noticias = () =>{
    return(
        <>
            <div className="mb-20 md:mb-40">          
                <img className="mb-5 pb-2 h-52 object-cover md:h-full" src="/img/banner2.gif" alt="Banner Noticias"/>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center m-10">
                        <a
                            href="https://www.hobbyconsolas.com/noticias/harry-potter-toma-madrid-otono-exhibicion-definitiva-amantes-saga-j-k-rowling-1401815"
                            className="min-h-[342px] mb-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            <img
                                className="object-cover rounded-lg md:h-[342px] md:w-[192px] w-96 h-48"
                                src="/img/h1.jpg"
                                alt="Harry Potter Exhibition"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Harry Potter toma Madrid este otoño con la exhibición definitiva para los amantes de la saga de J. K. Rowling
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                La exhibición itinerante más popular de la saga de Harry Potter llega a la capital para conquistar a los fans con un despliegue mágico.
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.mundodeportivo.com/alfabeta/harry-potter/harry-potter-campeones-de-quidditch-tiene-nuevo-trailer-inspirado-en-las-peliculas"
                            className="min-h-[342px] mb-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            <img
                                className="object-cover object-top rounded-lg md:h-[342px] md:w-[192px] w-96 h-48"
                                src="/img/h2.jpg"
                                alt="Harry Potter Exhibition"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Harry Potter: Campeones de Quidditch tiene nuevo tráiler inspirado en las películas
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Tras el enorme éxito de Hogwarts Legacy, Warner Bros Games vuelve a la carga con el universo mágico de Harry Potter con un videojuego que muchos llevan años pidiendo
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.mundodeportivo.com/alfabeta/harry-potter/harry-potter-por-que-los-seguidores-necesitan-una-serie-de-la-historia-de-voldemort"
                            className="min-h-[342px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            <img
                                className="object-cover object-top rounded-lg md:h-[342px] md:w-[192px] w-96 h-48"
                                src="/img/h3.webp"
                                alt="Harry Potter Exhibition"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Harry Potter: ¿por qué los seguidores necesitan una serie de la historia de Voldemort?
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Harry Potter ha tenido un impacto mundialmente significativo tanto con sus libros, como con sus sagas de películas donde hemos podido ver al gran Harry Potter superando todas las adversidades
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.infobae.com/malditos-nerds/2024/08/26/mas-alla-de-hogwarts-un-vistazo-a-los-proyectos-de-daniel-radcliffe-despues-de-harry-potter/"
                            className="min-h-[342px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            
                                <img
                                    className="object-cover object-top rounded-lg md:h-[342px] md:w-[192px] w-96 h-60"
                                    src="/img/h4.webp"
                                    alt="Harry Potter Exhibition"
                                />
                            
                            
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Más allá de Hogwarts: un vistazo a los proyectos de Daniel Radcliffe después de Harry Potter
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                La saga de Harry Potter, adaptada de los exitosos libros de J.K. Rowling, se convirtió en un fenómeno cultural que resonó en todo el mundo. La trama sigue a Harry Potter, un joven mago
                                </p>
                            </div>
                        </a>
                </div>
            </div>
        </>
    )
}