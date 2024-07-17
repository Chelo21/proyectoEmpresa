
{
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
            {listaValoresCampos &&
              listaValoresCampos.map((el, index) =>{
                                <option key={index} value={el.campo} name={el.campo}>
                    {el.nombre}
                  </option>
  })             }
          </select>
        </div>
        <div className="paginas">
        <Selector_pagias
            
          />
        </div> 
  }

  
{/* // const acualizaCampoBusqueda = () => { */}
{/* //   let camposA = []; //variable intermedia valoresCampo
//   if (ListaCampos && actualizaC) { */}
{/* //     ListaCampos.map((item) => { */}
{/* //       if (!item.noOP) { */}
{/* //         setValoresCampo((prevInputValues) => ({ */}
{/* //           ...prevInputValues,
//           [item.campo]: "",
//         }));
//       }
//     });
//     setActualizaC((c) => false);
//   }
// }; */}

// acualizaCampoBusqueda();

// const handeInputCange = (e) => {
//   let campoIC = [];
//   let campoInput = document.querySelector(".inputValue").value;
//   let campoText = document.querySelector(".selectorA").value;

//   setValoresCampo((prevInputValues) => ({
//     ...prevInputValues,
//     [campoText]: campoInput,
//   }));

//   setValorInput(campoInput);
// };

// const handeExisClick = () => {
//   setValorInput("");
//   console.log("se borro...");
//   let campoText = document.querySelector(".selectorA").value;
//   setValoresCampo((prevInputValues) => ({
//     ...prevInputValues,
//     [campoText]: "",
//   }));
// };

// const handleChangeSelect = (e) => {
//   let campoInput = document.querySelector(".inputValue").value;
//   let campoText = document.querySelector(".selectorA").value;

//   console.log(valoresCampo);
//   // console.log(campoText);
//   let pepevc = [valoresCampo];

//   console.log(JSON.stringify(pepevc).split(",")[0]);
//   console.log(pepevc[0][campoText]);
//   setValorInput(pepevc[0][campoText]);
// };

// const cambio = (valor) => {
//   cambioPaginacion(valor);
// };

// console.log(`campos..`, campos);
// console.log(`opcioes...`, valoresPaginacion)
// const [valor, setValor] = useState(""); //camia valor del imput

// const [valorCampoInput, setValorCampoInput] = useState("");

// console.log(`inicio de paginacion `,selector)

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
/*
! campos los productos
valoresPaginacion rangos de paginacion
 cambioCampo  cambio campo:valor
 cambioPaginacion cuando cambia paginacion
 opVisible  si es visible el paginador
 selector valor del selector campos
  cambioSelector cambia el selector
*/


//  <Paginacion     
// valoresPaginacion={valoresPaginacion}
//  cambioCampo
//   cambioPaginacion 
//   opVisible 
//   selector={selectorPaginacion} 
//   cambioSelector={cambioSelector}
//    />
// {/* {<Cabezera campos={LProductos} />} */}
// loaddding...
// <div className="spinnerA">
// <LoadSpinner />
// </div>

// const [fruits, setFruits] = useState(['Banana', 'Fresa', 'Durazno']);
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