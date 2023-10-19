
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cabecera from './Components/Cabecera'
import './App.css'
import { Empleados } from "./Components/Empleados/Empleados"
import { Home } from "./Components/Home/home"


function App() {


  return (
   
      <BrowserRouter>
      <Cabecera/>
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/empleados" element={<Empleados/>} />
<Route path="*" element={<h1>Error no hay datos</h1>} />


      </Routes>
      <div>Hola</div>
      </BrowserRouter>

   
  )
}

export default App
