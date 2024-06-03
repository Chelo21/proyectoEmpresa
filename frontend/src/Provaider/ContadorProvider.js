/* eslint-disable no-unused-vars */

import { useContext, createContext, useState } from 'react';

import { contadorContext } from "./contadorContext";


export const ContadorProvider = ({children}) => {
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(0);
    
    const [valoresPaginacion, setValoresPaginacion] = useState([]);
    const [selectorPaginacion, setSelectorPaginacion] = useState(50);
    
    const [ListaCampos, setListaCampos] = useState([]);
    const [listaValoresCampos, setListaValoresCampos] = useState([]);
  
    const [listaSelector, setListaSelector] = useState([]);
    const [valoresCampo, setValoresCampo] = useState({}); // relacion nombreCampo:valor




    const cambiaValoresPaginacion = (valores) =>{
        setValoresPaginacion(valores);
    }

    const cambiaSelectorPaginacion=(valor) =>{
        setSelectorPaginacion(valor)
    }

    return (
        <contadorContext.Provider 
        value={{
            pagina, 
            setPagina,
            totalPaginas, 
            setTotalPaginas,
            valoresPaginacion, 
            cambiaValoresPaginacion,
            selectorPaginacion, 
            cambiaSelectorPaginacion,
            ListaCampos, 
            setListaCampos,
            listaValoresCampos, 
            setListaValoresCampos,
            listaSelector, 
            setListaSelector,
            valoresCampo, 
            setValoresCampo
        }}>
           
                {children}
            
        </contadorContext.Provider>
    );
}