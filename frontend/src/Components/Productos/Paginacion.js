import React, { useState } from 'react'
import  './Paginacion.css'
const Paginacion = ({campos, opciones, setSelector }) => {
  console.log(`campos..`,campos)
  // console.log(opciones)
  const [valor, setValor] = useState('');

const handeInputCange =(e)=>{
setValor(e.target.value)
}
const handeExisClick =()=>{
  setValor('');
  console.log('se aprto')
  }

 const handleChange=()=>{
   } 

//  campos.map((el)=>(
//   console.log(el)
//  ))  

    return (
    <div className='paginacion'>
      <div className='selector'>
        <input 
        type='text'
        value={valor}
         onChange={handeInputCange}
         placeholder='ingrese valor a filtrar...'
         />
         <strong onClick={handeExisClick} className='exis_input'>X</strong>
        </div> 
      <div className='selectorOP'>
      <select onChange={handleChange} className='selectorA' >
      {campos &&
          campos.map((el) => (

            !el.noOP?<option key={el.id} value={el.nombre}>
              {el.nombre}
            </option>:``
          ))}

      </select>
      </div>
      
      paginacion................
    </div>
  )
}

export default Paginacion
