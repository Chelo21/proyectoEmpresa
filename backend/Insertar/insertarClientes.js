const { db } = require("../Database/db.js");
const clientes = require("./clientes.json");

const insertarClientes = () => {
  var p = (cliA) => {
    return new Promise((req, res) => {
      // console.log(cliA);
      let {
        idCLiente,
        nombre,
        direccion,
        tel,
        celular,
        fechaNac,
        ciudad,
        departamento,
        fechaING,
        rut,
        activo,
        date,
        hora,
        CI,
        apellido,
      } = cliA;

      nombre = nombre + "" + apellido;

      db.run(
        `INSERT OR REPLACE INTO clientes (idCli, nombreCli, direCli, telCli, celCli, fecNacCli, ciudadCli, depCli, fechaIngCli, cedIDCli, activoCli, fechaModCli) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?,?)`,
        [
          idCLiente,
          nombre,
          direccion,
          tel,
          celular,
          fechaNac,
          ciudad,
          departamento,
          fechaING,
          rut,
          activo,
          date,
        ],
        function (err) {
          if (err) {
            throw console.log("Error insertar registro", err);
          } else {
            return (res = "OK");
          }
        }
      );

      // return "hola";
    });
  };

  clientes.map((cliA, key) => {
    // console.log("salida", cliA);
    p(cliA).then((t) => console.log(t));
  });
};

module.exports = { insertarClientes };
