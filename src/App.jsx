import { Navbar2 } from "./components/Navbar2.jsx"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Personajes} from "./pages/Personajes.jsx"
import {HomePage} from "./pages/HomePage.jsx"
import { Spells } from "./pages/Spells.jsx"
import { Books } from "./pages/Books.jsx"
import { Footer } from "./components/Footer.jsx"
import { Quizz } from "./pages/Quizz.jsx"



export const App = () => {

  return (
    <BrowserRouter>
      <Navbar2/>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/personajes" element={<Personajes></Personajes>} ></Route>
          <Route path="/spells" element={<Spells></Spells>} ></Route>
          <Route path="/books" element={<Books></Books>} ></Route>
          <Route path="/quizz" element={<Quizz></Quizz>} ></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

