/* eslint-disable no-unused-vars */



// ! https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/

// useState Hook en 20 minutos (y errores más comunes)
// https://www.youtube.com/watch?v=i4GgO4vZieg
// INPUT SELECT PERSONALIZADO CON REACT SELECT | REACT JS
// https://www.youtube.com/watch?v=3lpVqgLh7vw
import { useEffect, useState } from "react";
import Cabezera from "./Cabezera";
import LoadSpinner from  "../../Comun/LoadSpinner/LoadSpinner";
import Paginacion from "./Paginacion";
import "./Productos.css";


export const Productos = () => {
  const [selector, setSelector] = useState(50);
  const [selectorIndice, setSelectorIndice] = useState(0);
  const [opVisible, setopVisible] = useState(true);
  var arrayNumbers = [5,10,20,30,40,50,60,70,80,90,100,200,300,400]
  const [opciones, setOpciones] = useState(arrayNumbers);
  const [fruits, setFruits] = useState(['Banana', 'Fresa', 'Durazno']);
  // setOpciones([5,10,20,30,40,50,60,70,80,90,100,200,300,400]);
  // var idProd,
  // nombreProd,
  // fechaIngProd,
  // precioProd,
  // monedaProd,
  // idProv,
  // activoProd,
  // stockProd,
  // minProd;

// useEffect(() => {
  
//   return () => {
    
//   };
// }, []);
const cambioIndice =(valor) => {

}
const cambioPaginacion =(valor) => {
  if(selector!==valor){
    setSelector(valor)
    console.log(`cambio en cambioPaginacion: `,valor)
  }
  
   
}

console.log(opciones)
  const LProductos = [
    {
      id: 1,
      nombre: "Codigo",
      campo: "idProd",
      class: "codigo"
    },
    {
      id: 2,
      nombre: "Nombre",
      campo: "nombreProd",
      class: "campo"
    },
    {
      id: 3,
      nombre: "Precio",
      campo: "precioProd",
      class: "campo"
    },
    
    {
      id: 4,
      nombre: "Stock",
      campo: "stockProd",
      class: "campo"
    },
    {
      id: 5,
      nombre: "Opciones",
      campo: "",
      class: "opciones",
      noOP:"yes"
    },
  ];

  return <div>
    <Paginacion campos={LProductos} opciones cambioIndice cambioPaginacion opVisible/>
    {<Cabezera campos={LProductos} />}
    loaddding...
    <div className="spinnerA">
    <LoadSpinner />
    </div>
    </div>;
};
