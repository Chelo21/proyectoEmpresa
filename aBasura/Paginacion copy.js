// querySelector
// https://www.youtube.com/watch?v=WtTLkE1SQFg

import React, { useState } from "react";
import "./Paginacion.css";
import Selector_pagias from "../src/Utils/Paginacion/Selector_pagias";

/*
! campos los productos
valoresPaginacion rangos de paginacion
 cambioCampo  cambio campo:valor
 cambioPaginacion cuando cambia paginacion
 opVisible  si es visible el paginador
 selector valor del selector campos
  cambioSelector cambia el selector
*/

const Paginacion = ({
  campos,
  valoresPaginacion,
  cambioCampo,
  cambioPaginacion,
  opVisible,
  selector,
  cambioSelector,
}) => {
  // console.log(`campos..`, campos);
  // console.log(`opcioes...`, valoresPaginacion)
  const [valor, setValor] = useState(""); //camia valor del imput
  const [valoresCampo, setValoresCampo] = useState({}); // relacion nombreCampo:valor
  const [actualizaC, setActualizaC] = useState(true); // bloquear acutalizar el registro de campos en busqueda
  const [valorInput, setValorInput] = useState("");
  const [valorCampoInput, setValorCampoInput] = useState("");


  // console.log(`inicio de paginacion `,selector)




  const acualizaCampoBusqueda = () => {
    
    let camposA = []; //variable intermedia valoresCampo
    if (campos && actualizaC) {
      campos.map((item) => {
        if (!item.noOP) {
          camposA.push({ [item.campo]: "" });
          // console.log(item.campo)
        }
      });
      setActualizaC(false);
      console.log(camposA);
      setValoresCampo(camposA);
    }
  };
  acualizaCampoBusqueda();

  /*
document.querySelectorAll('#campo') todos los que coincidan
document.querySelector(`campo`) >> solo los tag, solo el primero document.querySelector(`li`)
document.querySelector(`.campo`) >> Campo
document.querySelector(`#campo`) >> id
document.querySelector(`[name="campo"]`) >> propiedad name nombre Campo
elements = document.getElementsByTagName(name);

document.getElementById, document.getElementtagName son dinamicos
document.querySelector es statico

*/

  const handeInputCange = (e) => {
    let campoIC = [];
    // console.log(`el input.. `,document.querySelector(".inputValue").value)
    // console.log(`el selector.. `, document.querySelector(".selectorA").value)
    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;
//     valoresCampo.map((item) => {
//       // console.log(`item en item `,JSON.stringify(item[campoText]))
//       // console.log(typeof item[campoText]);
//     if(typeof item[campoText] === `string`){
//       console.log(campoText)
//       setValorInput(campoInput)
//       setValorCampoInput(campoText)


//       campoIC.push({ [campoText]: campoInput });
//     } else{
//       campoIC.push(item)
//     }
    
//     });


    setValoresCampo(a=> [...a, {[campoText]:campoInput}]);
    console.log(`campoInput`,campoInput)
console.log(`campoText`,campoText)
    setValor(e.currentTarget.value);
    console.log(`campoIC `,campoIC)
  };

  const handeExisClick = () => {
    setValor("");
    console.log("se borro...");
  };

  const handleChange = (e) => {

    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;

    console.log(`cambia el selector..`, e.currentTarget.value);
    console.log(valoresCampo);

    console.log(
      `cambia el nombre..`,
      e.currentTarget.options[e.currentTarget.selectedIndex].text
    );
  };

const cambio=(valor)=>{
  cambioPaginacion(valor)
}

  return (
    <div className="paginacion">
      <div className="selector">
        <input
          type="text"
          value={valor}
          onChange={handeInputCange}
          placeholder="ingrese valor a filtrar..."
          className="inputValue"
        />
        <strong onClick={handeExisClick} className="exis_input">
          X
        </strong>
      </div>
      <div className="selectorOP">
        <select onChange={handleChange} className="selectorA">
          {campos &&
            campos.map((el, index) =>
              !el.noOP ? (
                <option key={index} value={el.campo} name={el.campo}>
                  {el.nombre}
                </option>
              ) : (
                ``
              )
            )}
        </select>
      </div>
      <div className="paginas">
        <Selector_pagias  valores={valoresPaginacion} cambio={cambio} selector={selector} cambioSelector={cambioSelector}/>
      </div>
      paginacion................
    </div>
  );
};

export default Paginacion;
    // console.log(document.querySelector(".inputValue").value)
        // console.log(`cambia el nombre..`,e.target.selectedIndex);
    // console.log(`cambia el nombre..`,e.target.options[e.target.selectedIndex].text);