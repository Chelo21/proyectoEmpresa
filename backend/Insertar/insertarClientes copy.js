const { db } = require("../Database/db.js");
const clientes = require("./clientes.json");

const insertarClientes = () => {
  var p = (cliaA) => {
    // resolve,reject
    return new Promise((req, res) => {
      var today = new Date();
      console.log(today);
      // console.log(today.format("YYYY-MM-DD HH:m:s"));
      // console.log(today.toLocaleString());

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
      } = cliaA;

      nombre = nombre + "" + apellido;

      // {
      //   "idCLiente": 7,
      //   "nombre": "Donna",
      //   "direccion": "5023 Vulputate Avenue",
      //   "tel": "(032) 74240655",
      //   "celular": "(0564) 23982676",
      //   "fechaNac": "23/10/2024",
      //   "ciudad": "Blackwood",
      //   "departamento": "La Guajira",
      //   "fechaING": "10/06/2023",
      //   "rut": "46724609-7"
      //   "activo": "0",
      //   "date": "2023-07-21 12:59:29",
      //   "hora": "2:33:00",
      //   "CI": 5843034834,
      //   "apellido": "Tate",
      // },

      // "CREATE TABLE IF NOT EXISTS clientes (idCli, nombreCli, direccionCli, telCli, celCli, fecNacCli, ciudadCli, depCli, fechaIngCli, cedIDCli, activoCli, fechaModCli"

      // "CREATE TABLE IF NOT EXISTS clientes (idCli	INTEGER PRIMARY KEY AUTOINCREMENT, nombreCli	TEXT, direCli TEXT, telCli	TEXT, celCli	TEXT, fecNacCli	TEXT, ciudadCli	TEXT, depCli	TEXT, fechaIngCli	TEXT, cedIDCli	TEXT, activoCli	INTEGER DEFAULT 1, fechaModCli	TEXT, Timestamp	DATETIME DEFAULT CURRENT_TIMESTAMP)"

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
            res(error);
          } else {
            res("OK");
          }
        }
      );
    });
  };

  clientes.map((cli) => {
    p(cli).then((a) => (a !== "OK" ? `error ${a}` : ``));
  });
};

module.exports = { insertarClientes };

// {
// 	"nombre": "Donna",
// 	"apellido": "Tate",
// 	"direccion": "5023 Vulputate Avenue",
// 	"tel": "(032) 74240655",
// 	"celular": "(0564) 23982676",
// 	"CI": 5843034834,
// 	"fechaNac": "23/10/2024",
// 	"departamento": "La Guajira",
// 	"ciudad": "Blackwood",
// 	"fechaING": "10/06/2023",
// 	"activo": "0",
// 	"date": "2023-07-21 12:59:29",
// 	"hora": "2:33:00",
// 	"idCLiente": 7,
// 	"rut": "46724609-7"
// },

// `CREATE TABLE clientes (idCli	INTEGER PRIMARY KEY AUTOINCREMENT, nombreCli	TEXT, direccionCli	TEXT, telCli	TEXT, celCli	TEXT, fecNacCli	TEXT, ciudadCli	TEXT, depCli	TEXT, fechaIngCli	TEXT, cedIDCli	TEXT, activoCli	INTEGER DEFAULT 1, fechaModCli	TEXT, Timestamp	DATETIME DEFAULT CURRENT_TIMESTAMP)`

//  db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   });
