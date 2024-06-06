/* eslint-disable no-unused-vars */
// querySelector
// https://www.youtube.com/watch?v=WtTLkE1SQFg

import React, { useContext, useEffect, useState } from "react";
import "./Paginacion.css";
import Selector_pagias from "./Selector_pagias";
import { useContador } from "../../Provaider/ContadorContext";
import logo from '../../Imagenes/lupa_1.png'

const Paginacion = ({ cambioSelector, cambioPagiandor }) => {
  const {
    listaCampos,
    setListaCampos,
    listaValoresCampos,
    setListaValoresCampos,
    setListaValoresPaginacion,

    cambiaListaValoresCampos,
  } = useContador();

  const [actualizaC, setActualizaC] = useState(true); // bloquear acutalizar el registro de campos en busqueda
  const [valorInput, setValorInput] = useState("");

  useEffect(() => {
    let lista = [];
    // console.log(`en useEffect psginacion..`, listaCampos);
    setListaValoresCampos([]);

    listaCampos.map((item) => {
      if (!item.noOP) {
        // console.log(`en listacampo.map`, item.campo);
        setListaValoresCampos((estadoAnterior) => {
          return { ...estadoAnterior, [item.campo]: "" };
        });
      }
    });
  }, []);

  const handeInputCange = (e) => {
    let campoIC = [];
    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;
    // console.log(`${campoText}:${campoInput}`)
    setListaValoresCampos((estadoAnterior) => {
      return { ...estadoAnterior, [campoText]: campoInput };
    });
    setValorInput(campoInput);
    // cambioSelector();
  };

  const handeExisClick = () => {
    setValorInput("");
    console.log("se borro...");
    let campoText = document.querySelector(".selectorA").value;
    setListaValoresCampos((estadoAnterior) => {
      return { ...estadoAnterior, [campoText]: "" };
    });
  };

  const handleChangeSelect = (e) => {
    let campoInput = document.querySelector(".inputValue").value;
    let campoText = document.querySelector(".selectorA").value;
    // console.log(`${campoText}:${campoInput}`)
    // console.log(`valaor del campo...`,listaValoresCampos[campoText])
    setValorInput(listaValoresCampos[campoText]);
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
          {listaCampos &&
            listaCampos.map((el, index) =>
              !el.noOP ? (
                <option key={index} value={el.campo} name={el.campo}>
                  {el.nombre}
                </option>
              ) : (
                ""
              )
            )}
        </select>
      </div>
      {/* fin select */}
      <div className="lupa_marco">
      <img src={logo} className="lupa"/>
      </div>
      <Selector_pagias />
    </div>
  );
};

export default Paginacion;

// console.log(listaValoresCampos);
// // console.log(campoText);
// let pepevc = [listaValoresCampos];

// console.log(JSON.stringify(pepevc).split(",")[0]);
// console.log(pepevc[0][campoText]);
// setValorInput(pepevc[0][campoText]);

{
  /* listaValoresCampos.map((el, index) =>{
                                <option key={index} value={el.campo} name={el.campo}>
                    {el.nombre}
                  </option>
  })             } */
}
