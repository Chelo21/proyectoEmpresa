import React, { useState } from "react";


var pagianasTotales = 25000;
const Selector_pagias = ({ valores, cambio, selector, cambioSelector }) => {
 
const [pagianaActual, setPagianaActual] = useState(1500); 
 
  const handeInputCange = (e) => {
   if(e.target.value.length>6){
    console.log('es mas larfgoooooooowa')
    e.preventDefault();
    return
   }


    if (!/[0-9]/.test(e.key)) {
      console.log(e.target.value);
      e.preventDefault();
    }
    
    setPagianaActual(e.target.value);
    
   
  };

  const handeSelect = (valor) => {
    console.log(`el valor del select `, valor);
    cambioSelector(valor);
  };

  const handleKeyPress=(e) =>{
    if (e.key === 'Enter') {
      console.log('se apewro enter')
      e.preventDefault();
    }
  }
  



  const Selector = () => {
    return valores ? (
      <>
        <select
          defaultValue={selector}
          onChange={(e) => handeSelect(e.target.value)}
        >
          {valores.map((item, index) => (
            // if(selector===item)(
            // <option key={index} value={item}>{item}</option>

            // )else (
            <option key={index} value={item}>
              {item}
            </option>
            // )
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
        <div className="boton">
          <span>&laquo;</span>
        </div>
        <div className="boton">
          <span>&#60;</span>
        </div>
        <div className="contadorPagina">
          <input
            type="number"
            value={pagianaActual}
            onChange={(e) => handeInputCange(e)}
            onKeyUp={handleKeyPress}
            placeholder="ingrese valor a filtrar..."
            className="inputPagina"
            
            
          />
        </div>
        <div className="contadorPaginaDivisor">
          <span>/</span>
        </div>
        <div className="contadorPaginaTotal">
          <span>{pagianasTotales}</span>
        </div>

        <div className="boton">
          <span>&#62;</span>
        </div>
        <div className="boton">
          <span>&raquo;</span>
        </div>
      </div>
    </>
  );
};

export default Selector_pagias;
