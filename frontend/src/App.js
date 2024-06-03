import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Empleados } from "./Components/Empleados/Empleados";
import { Home } from "./Components/Home/home";

import Layout from "./Components/Menu/Layout";
import "./App.css";
import { Productos } from "./Components/Productos/Productos";
import Ventas from "./Components/Ventas/Ventas";
import { ContadorProvider } from "./Provaider/ContadorProvider";

function App() {
  return (
    <ContadorProvider >    
    <BrowserRouter>
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ventas" element={<Ventas />} />

        <Route path="*" element={<h1>Error no hay datos</h1>} />
      </Routes>
    </BrowserRouter>
    </ContadorProvider>

  );
}

export default App;
