import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Sobre from "./pages/section/sobre"
import Habilidades from "./pages/section/habilidades"
import Projetos from "./pages/section/projetos"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/habiidades" element={<Habilidades/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
    </Routes>
    </>
  )
}

export default App
