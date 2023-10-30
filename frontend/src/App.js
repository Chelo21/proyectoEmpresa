
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Empleados } from "./Components/Empleados/Empleados"
import { Home } from "./Components/Home/home"

import Layout from "./Components/Menu/Layout"
import './App.css';

function App() {


  return (
   
      <BrowserRouter>
      <Layout/>
   
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
