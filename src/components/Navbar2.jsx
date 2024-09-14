import { useState } from "react";

export const Navbar2 = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <nav className="bg-gray-800 flex flex-col relative items-center md:justify-between md:flex-row ">

                {/* Botón Mobile */}
                <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
                    <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#bfabd8] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen ? "true" : "false"}
                    onClick={toggleMenu}
                    >
                    <svg
                        className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <svg
                        className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>

                {/* Navbar Logo */}
                <div className="md:ml-10">
                    <a href="/">
                        <img
                            src="/img/logo3.png"
                            alt="Logo"
                            className="h-full w-40"
                        />
                    </a>
                </div>

                {/* Navbar Links */}
                <div className="hidden md:flex items-center justify-evenly space-x-10">
                    <a href="/personajes" className="text-gray-300 hover:bg-gray-700 px-3 py-2 hover:text-white rounded-md text-xl font-medium">
                        Personajes
                    </a>

                    <a href="/spells" className="text-gray-300 hover:bg-gray-700 px-3 py-2 hover:text-white rounded-md text-xl font-medium">
                        Hechizos
                    </a>

                    <a href="/books" className="text-gray-300 hover:bg-gray-700 px-3 py-2 hover:text-white rounded-md text-xl font-medium">
                        Libros
                    </a>

                    <a href="/quizz" className="text-gray-300 hover:bg-gray-700 px-3 py-2 hover:text-white rounded-md text-xl font-medium">
                        Trivias
                    </a>
                </div>

                {/* Navbar Search */}
                <div className="hidden md:flex mr-7">
                    <form>
                        <input type="text" placeholder="Buscar" className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-900" />
                        <button
                            type="submit"
                            className="ml-2 bg-yellow-500 hover:bg-yellow-700 px-3 py-2 rounded-md"
                        >
                        Buscar
                        </button>
                    </form>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="/personajes"
                            className="block text-white hover:bg-[#FCEEEE] hover:text-black px-3 py-2 rounded-md text-base font-medium"
                        >
                            Personajes
                        </a>
                        <a
                            href="/spells"
                            className="block text-white hover:bg-[#FCEEEE] hover:text-black px-3 py-2 rounded-md text-base font-medium"
                        >
                            Hechizos
                        </a>
                        <a
                            href="/books"
                            className="block text-white hover:bg-[#FCEEEE] hover:text-black px-3 py-2 rounded-md text-base font-medium"
                        >
                            Libros
                        </a>
                        <a
                            href="/quizz"
                            className="block text-white hover:bg-[#FCEEEE] hover:text-black px-3 py-2 rounded-md text-base font-medium"
                        >
                            Trivias
                        </a>
                    <div className="px-2 pt-2">
                        <form className="flex">
                        <input
                            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-900"
                            type="text"
                            placeholder="Buscar"
                        />
                        <button
                            type="submit"
                            className="ml-2 bg-yellow-500 hover:bg-yellow-700 px-3 py-2 rounded-md"
                        >
                            Buscar
                        </button>
                        </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}