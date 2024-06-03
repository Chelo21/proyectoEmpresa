/* eslint-disable no-unused-vars */



// ! https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/

// useState Hook en 20 minutos (y errores más comunes)
// https://www.youtube.com/watch?v=i4GgO4vZieg
// INPUT SELECT PERSONALIZADO CON REACT SELECT | REACT JS
// https://www.youtube.com/watch?v=3lpVqgLh7vw
import { useContext, useEffect, useState } from "react";
import Cabezera from "./Cabezera";
import LoadSpinner from  "../../Comun/LoadSpinner/LoadSpinner";
import Paginacion from "../../Utils/Paginacion/Paginacion";
import {  contadorContext} from "../../Provaider/contadorContext";




export const Productos = () => {
  const {
    valoresPaginacion, 
    cambiaValoresPaginacion,
    selectorPaginacion, 
    cambiaSelectorPaginacion,
    ListaCampos, 
    setListaCampos,
    } = useContext(contadorContext)

  var arrayNumbers = [5,10,20,30,40,50,60,70,80,90,100,200,300,400]
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

  useEffect(() => {
    
    cambiaValoresPaginacion(arrayNumbers)
  cambiaSelectorPaginacion(100)
  setListaCampos(LProductos) 
}, []);



// const [selector, setSelector] = useState(100);
 


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

//  ! cambioCampo son los cambios de los valores de busqueda
const cambioCampo =(valor) => {
console.log(valor)
}

// cambioPaginacion es cuando cambia el valor de paginacion
const cambioPaginacion =(valor) => {
  if(selector!==valor){
    cambiaSelectorPaginacion(valor)

    console.log(`cambio en cambioPaginacion: `,valor)
  }
  
   
}

// console.log(opciones)



const cambioSelector = (value) => {
  console.log(`valor selector en productos`,value)
  // setSelector(value)
}  
/*
! campos los productos
valoresPaginacion rangos de paginacion
 cambioCampo  cambio campo:valor
 cambioPaginacion cuando cambia paginacion
 opVisible  si es visible el paginador
 selector valor del selector
  cambioSelector cambia el selector
  valorPagina pagina actual
  valorTotalPaginas total de paginas
*/
return <div>
    <Paginacion
    
     valoresPaginacion={valoresPaginacion}
      cambioCampo
       cambioPaginacion 
       opVisible 
       selector={selectorPaginacion} 
       cambioSelector={cambioSelector}
        />
    {/* {<Cabezera campos={LProductos} />} */}
    loaddding...
    <div className="spinnerA">
    <LoadSpinner />
    </div>
    </div>;
};
