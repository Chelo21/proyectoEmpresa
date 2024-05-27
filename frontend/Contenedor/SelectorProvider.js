/* eslint-disable no-unused-vars */
import { useContext, createContext, useState } from 'react';


const ContadorContext = createContext();

export const ContadorProvider = ({children}) => {
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [ListaProductos, setListaProductos] = useState([]);
    const [cambioSelector, setcambioSelector] = useState(``);

}