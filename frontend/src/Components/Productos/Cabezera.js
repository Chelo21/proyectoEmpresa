/* eslint-disable react/prop-types */
import React from 'react'

const Cabezera = ((campos) => {
  
//   console.log( " los datos " , campos) 
//   console.log(campos.class) 
  let lista=campos.campos
 return(
    <div className='cabezera'>
   
 {  lista.map((item, index)=>{
    return(
      <div className={item.class} key={index}>
    {item.nombre}
    </div>
    )
  })
 
 }
      
    </div>

 )
     
      
  
});

export default Cabezera

