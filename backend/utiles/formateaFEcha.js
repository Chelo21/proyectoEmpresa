const formateaFEcha = (dato) => {
  console.log(dato);
  console.log("dsfkjsd fskdjh");
  let hora = dato.substr(0, 19);
  hora = hora.replace("T", " ");
  return hora;
};

module.exports = { formateaFEcha };

// const formateaFEcha = (dato) => {
//     let hora = dato.substr(0, 10);

//     return hora;
//   };

//   export default formateaFEcha;
