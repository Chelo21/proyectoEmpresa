// querySelector
// https://www.youtube.com/watch?v=WtTLkE1SQFg

import React, { useState } from "react";
import "./Paginacion.css";
import Selector_pagias from "./Selector_pagias";

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
          setValoresCampo((prevInputValues) => ({
            ...prevInputValues,
            [item.campo]: "",
          }));
        }
      });
      setActualizaC((c) => false);
    }
  };
  acualizaCampoBusqueda();

  const handeInputCange = (e) => {
    let campoIC = [];
    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;

    setValoresCampo((prevInputValues) => ({
      ...prevInputValues,
      [campoText]: campoInput,
    }));

    setValorInput(campoInput);
  };

  const handeExisClick = () => {
    setValorInput("");
    console.log("se borro...");
    let campoText = document.querySelector(".selectorA").value;
    setValoresCampo((prevInputValues) => ({
      ...prevInputValues,
      [campoText]: "",
    }));
  };

  const handleChangeSelect = (e) => {
    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;

    console.log(valoresCampo);
    // console.log(campoText);
    let pepevc = [valoresCampo];

    console.log(JSON.stringify(pepevc).split(",")[0]);
    console.log(pepevc[0][campoText]);
    setValorInput(pepevc[0][campoText]);
  };

  const cambio = (valor) => {
    cambioPaginacion(valor);
  };

  return (
    <div className="paginacion">
      <div className="selector">
        <input
          type="text"
          value={valorInput}
          onChange={handeInputCange}
          placeholder="ingrese valor a filtrar..."
          className="inputValue"
        />
        <strong onClick={handeExisClick} className="exis_input">
          X
        </strong>
      </div>
      <div className="selectorOP">
        <select onChange={(e) => handleChangeSelect(e)} className="selectorA">
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
        <Selector_pagias
          valores={valoresPaginacion}
          cambio={cambio}
          selector={selector}
          cambioSelector={cambioSelector}
        />
      </div>
     
    </div>
  );
};

export default Paginacion;

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
