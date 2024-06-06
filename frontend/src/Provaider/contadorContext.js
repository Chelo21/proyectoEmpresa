/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'


export const ContadorContext = createContext()


const ContadorContextProvider = ({ children }) => {
    const [listaCampos, setListaCampos] = useState([]); //jsdfj ljsflsjf
    const [listaValoresCampos, setListaValoresCampos] = useState([]); //[campo valor]
    
    const [listaValoresPaginacion, setListaValoresPaginacion] = useState([]); // [5,10,.....]
    const [valorActualPaginacion, setValorActualPaginacion] = useState(50);
    
    const [paginaAcual, setPaginaActual] = useState(1); //pagina actual
    const [totalPaginas, setTotalPaginas] = useState(0); //total de paginas

    const cambiaListaCampos = (valores) => {
      setListaCampos(valores);
    };
  
    const cambiaListaValoresCampos = (valor) => {
      console.log(`valor en cambiaListaValoresCampos `,valor)
      setListaValoresCampos(prev=>{prev, valor});
    };
  
  // paginacion.....
  
  const cambiaListaValoresPaginacion = (valor) => {
    setListaValoresPaginacion(valor);
  };
  
    const cambiaPagina = (valor) => {
      valorActualPaginacion(valor);
    };
  
    const cambiaTotalPaginas = (valor) => {
      setTotalPaginas(valor);
    };
  
  
    const cambiaValorActualPaginacion = (valor) => {
      setValorActualPaginacion(valor);
    };
  
    const cambiaValoresPaginacion = (valores) => {
      setValoresPaginacion(valores);
    };


  
    
    return (
      <ContadorContext.Provider value={{
        listaCampos,
        setListaCampos,
        cambiaListaCampos,
        listaValoresCampos,
        setListaValoresCampos,
        

        cambiaListaValoresCampos,

        listaValoresPaginacion,
        setListaValoresPaginacion,

        cambiaListaValoresPaginacion,
        valorActualPaginacion,
    setValorActualPaginacion,

        cambiaValoresPaginacion,

        paginaAcual,
        setPaginaActual,
        cambiaPagina,
        totalPaginas,
        cambiaTotalPaginas,
        setTotalPaginas
         
         }}>
        {children}
      </ContadorContext.Provider>
    );
  };
  
  export const useContador = () => useContext(ContadorContext);
  
  export default ContadorContextProvider;
  