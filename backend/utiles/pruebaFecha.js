const { formateaFEcha } = require("./formateaFEcha");

const pruebaFecha = () => {
  let fecha = new Date().toISOString();
  // console.log("la fecga");
  // return "dfsdf";
  console.log(Date.now());
  console.log(formateaFEcha(fecha));
};

pruebaFecha();
