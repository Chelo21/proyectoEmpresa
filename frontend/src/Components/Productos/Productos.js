/* eslint-disable no-unused-vars */

// ! https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/

// useState Hook en 20 minutos (y errores más comunes)
// https://www.youtube.com/watch?v=i4GgO4vZieg
// INPUT SELECT PERSONALIZADO CON REACT SELECT | REACT JS
// https://www.youtube.com/watch?v=3lpVqgLh7vw
import { useContext, useEffect, useState } from "react";
import Cabezera from "./Cabezera";
import LoadSpinner from "../../Comun/LoadSpinner/LoadSpinner";
import Paginacion from "../../Utils/Paginacion/Paginacion";

import { useContador } from "../../Provaider/ContadorContext";

export const Productos = () => {
  const {
    listaCampos,
    setListaCampos,
    cambiaListaCampos,
    listaValoresCampos,

    cambiaListaValoresCampos,
    listaValoresPaginacion,
    cambiaListaValoresPaginacion,
    setValorActualPaginacion,
    totalPaginas, 
    setTotalPaginas



  } = useContador();

  var arrayPaginacion = [
    5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400,
  ];
  const LProductos = [
    {
      id: 1,
      nombre: "Codigo",
      campo: "idProd",
      class: "codigo",
    },
    {
      id: 2,
      nombre: "Nombre",
      campo: "nombreProd",
      class: "campo",
    },
    {
      id: 3,
      nombre: "Precio",
      campo: "precioProd",
      class: "campo",
    },

    {
      id: 4,
      nombre: "Stock fddfgdfgdfgdfg",
      campo: "stockProd",
      class: "campo",
    },
    {
      id: 5,
      nombre: "Opciones",
      campo: "",
      class: "opciones",
      noOP: "yes",
    },
  ];

  useEffect(() => {
    setListaCampos(LProductos); 
    cambiaListaValoresPaginacion(arrayPaginacion);
    setValorActualPaginacion(50)
    setTotalPaginas(500)
  }, []);

  // cambiaListaCampos(LProductos),

  // const [selector, setSelector] = useState(100);

  //  ! cambioCampo son los cambios de los valores de busqueda
  const cambioCampo = (valor) => {
    console.log(valor);
  };

  const cambioSelector = () => {
    console.log(`valor selector`);
    console.log(`valores de campos salida:`, listaValoresCampos);
  };

  const cambioPagiandor = (valor) => {
    console.log(`cambio paginador select`, valor);
  };

  return (
    <div>
      {/* {listaCampos && console.log(`lista campos productosR...`,listaCampos)} */}
      {/* {listaValoresPaginacion && console.log(`en productos listaValoresPaginacion`,listaValoresPaginacion)} */}
      {listaCampos && (
        <Paginacion
          cambioSelector={cambioSelector}
          cambioPagiandor={cambioPagiandor}
        />
      )}

      <div>cargando....</div>
    </div>
  );
};
