import React, { useState } from "react";
import { useContador } from "../../Provaider/contadorContext";

var pagianasTotales = 25000;



const Selector_pagias = ({}) => {

  const {
    listaValoresPaginacion,
    valorActualPaginacion,
    setValorActualPaginacion,
    totalPaginas,
    paginaAcual, 
    setPaginaActual
  }=useContador()  
 
const [pagianaActual, setPagianaActual] = useState(1); 
 
  const handeInputCange = (e) => {
    let valor = e.target.value;

   if(e.target.value.length>6){
    // console.log('es mas larfgoooooooowa')
    e.preventDefault();
    return
   }


    if (!/[0-9]/.test(e.key)) {
      // console.log(`en test `,e.target.value);
      e.preventDefault();
    }
    
    if(valor<1) valor=1
    if(valor>totalPaginas) valor=totalPaginas
    
    console.log(`wn key press `,valor)
    setPaginaActual(valor)
    
   
  };

  const handeSelect = (valor) => {
    console.log(`el valor del select `, valor);
    cambioSelector(valor);
  };

  const handleKeyPress=(e) =>{
    let valor = e.target.value;
    if (e.key === 'Enter') {
      console.log('se apewro enter')
      e.preventDefault();
      if(valor<1) valor=1
      if(valor>totalPaginas) valor=totalPaginas
      
      console.log(`wn key press `,valor)
      setPaginaActual(valor)
      


    }
  }
  
  const cambiaPaginacion = (valor) => {
    console.log(`cambia valor`,valor)
    setValorActualPaginacion(valor)

  }

 const cambiaBoton = (valor) => {
  if(valor<1) valor=1
  if(valor>totalPaginas) valor=totalPaginas
  
  console.log(valor)
  setPaginaActual(valor)
 } 


  const Selector = () => {
    return listaValoresPaginacion ? (
      <>
        <select
          defaultValue={valorActualPaginacion}
          onChange={(e) => cambiaPaginacion(e.target.value)}
          className="selector_por_pagina"
        >
          {listaValoresPaginacion.map((item, index) => (
          
            <option key={index} value={item}>
              {item}
            </option>
         
          ))}
        </select>
       
      </>
    ) : null;
  };

  return (
    <>
      <div className="sectorPaginaTotal">
        <div className="selectorPT">
          <Selector />
          
        </div>
        <div className="boton" onClick={()=>cambiaBoton(1)}>
          <span>&laquo;</span>
        </div>
        <div className="boton" onClick={()=>cambiaBoton(paginaAcual-1)}>
          <span>&#60;</span>
        </div>
        <div className="contadorPagina">
          <input
            type="number"
            value={paginaAcual}
            onChange={(e) => handeInputCange(e)}
            
            placeholder="ingrese valor a filtrar..."
            className="inputPagina"
            
            
          />
        </div>
        <div className="contadorPaginaDivisor">
          <span>/</span>
        </div>
        <div className="contadorPaginaTotal">
          <span>{totalPaginas}</span>
        </div>

        <div className="boton" onClick={()=>cambiaBoton(paginaAcual+1)}>
          <span>&#62;</span>
        </div>
        <div className="boton" onClick={()=>cambiaBoton(totalPaginas)}>
          <span>&raquo;</span>
        </div>
      </div>
    </>
  );
};

export default Selector_pagias;
// onKeyUp={handleKeyPress}