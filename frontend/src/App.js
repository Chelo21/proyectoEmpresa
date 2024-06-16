import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Empleados } from "./Components/Empleados/Empleados";
import { Home } from "./Components/Home/home";

import Layout from "./Components/Menu/Layout";
import "./App.css";
import { Productos } from "./Components/Productos/Productos";
import Ventas from "./Components/Ventas/Ventas";
import  ContadorContextProvider from "./Provaider/ContadorContext";

function App() {
  return (
    <ContadorContextProvider >    
    <BrowserRouter>
      <Layout />

      <Routes>
    
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empleados" element={<Empleados />} />
        <Route exact path="/productos/*" element={<Productos />} />
        <Route exact path="/ventas" element={<Ventas />} />
        <Route component={<Home />} />
        <Route path="*" element={<h1>Error no hay datos</h1>} />
        
      </Routes>
    </BrowserRouter>
    </ContadorContextProvider>

  );
}

export default App;
