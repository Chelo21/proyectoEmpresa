const { db } = require("../Database/db.js");
const prod = require("./productos.json");

const insertarProd = async () => {
  var p = (proda) => {
    return new Promise((req, res) => {
      console.log(proda);
      var {
        idProd,
        nombreProd,
        fechaIngProd,
        precioProd,
        monedaProd,
        idProv,
        activoProd,
        stockProd,
        minProd,
        nombreProv,
      } = proda;

      // db.run(
      //   "CREATE TABLE IF NOT EXISTS productos (
      //     idProd	INTEGER NOT NULL UNIQUE,
      //     nombreProd TEXT,
      //     fechaIngProd TEXT,
      //     precioProd REAL DEFAULT 0,
      //     monedaProd TEXT DEFAULT '$',
      //     idProv INTEGER DEFAULT 0,
      //     activoProd INTEGER DEFAULT 1,
      //     stockProd REAL DEFAULT 0,
      //     minProd REAL DEFAULT 0,
      //     autoProd INTEGER PRIMARY KEY AUTOINCREMENT)"
      // );

      // {
      //   "idProd": 1,
      //   "nombreProd": "Jacqueline Buck",
      //   "fechaIngProd": "2023-01-15 11:25:50",
      //   "precioProd": "33 209.39",
      //   "monedaProd": "$",
      //   "nombreProv": "Dolor Quam Elementum Consulting",
      //   "idProv": 8138,
      //   "activoProd": "0",
      //   "stockProd": 243,
      //   "minProd": "0"
      // },

      typeof precioProd === "string"
        ? (precioProd = parseFloat(precioProd.replace(" ", "")))
        : "";
      activoProd = parseInt(activoProd);
      minProd = parseFloat(minProd);
      stockProd = parseFloat(stockProd);

      console.log(
        ` --INSERT Or IGNORE INTO productos (idProd	, nombreProd , fechaIngProd , precioProd,monedaProd , idProv , activoProd , stockProd , minProd) VALUES (${idProd},${nombreProd},${fechaIngProd},${precioProd},${monedaProd},${idProv},${activoProd},${stockProd},${minProd})`
      );

      db.run(
        `INSERT OR REPLACE INTO productos (idProd, nombreProd,fechaIngProd, precioProd, monedaProd, idProv, activoProd, stockProd, minProd) VALUES (?,?,?,?,?,?,?,?,?)`,
        [
          idProd,
          nombreProd,
          fechaIngProd,
          precioProd,
          monedaProd,
          idProv,
          activoProd,
          stockProd,
          minProd,
        ],
        function (err) {
          if (err) {
            throw console.log("Error insertar registro", err);
          } else {
            return (res = { status: "success", message: "Removed" });
          }
        }
      );

      return "hola";
    });
  };

  prod.map((prod, key) => {
    console.log("salida", prod);
    p(prod).then((t) => console.log(t));
  });

  console.log("ingrese a insertar producto");
};

module.exports = { insertarProd };

// db.exec(
//     "CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER, cpf INTEGER, email VARCHAR (50) )"
//   );
//   console.log("se creo tabla clientes");

// db.run(
//   `INSERT O IGNORE IF NOT EXISTS productos (idProd, nombreProd, fechaIngProd ) VALUES (${idProd},${nombreProd},${fechaIngProd})`
// );

//   db.exec(
//     `INSERT O IGNORE IF NOT EXISTS productos (idProd	, nombreProd , fechaIngProd , precioProd,monedaProd , idProv , activoProd , stockProd , minProd) VALUES (${idProd},${nombreProd},${fechaIngProd},${precioProd},${monedaProd},${idProv},${activoProd},${stockProd},${minProd})`
//   );

// db.run('delete from bots where bot_id = ?', req.params.bot_id, function(err) {
//   if (err) {
//    logger.winston.error("Error removing the record");
//   } else {
//    res.status(200).json({ status: 'success', message: 'Removed' });
//   }
//  });

// prod.map((prod, key) => {
//   var {
//     idProd,
//     nombreProd,
//     fechaIngProd,
//     precioProd,
//     monedaProd,
//     idProv,
//     activoProd,
//     stockProd,
//     minProd,
//     nombreProv,
//   } = prod;

//   typeof precioProd === "string"
//     ? (precioProd = parseFloat(precioProd.replace(" ", "")))
//     : "";
//   activoProd = parseInt(activoProd);
//   minProd = parseFloat(minProd);

//   console.log(
//     `${key} --INSERT O IGNORE INTO productos (idProd	, nombreProd , fechaIngProd , precioProd,monedaProd , idProv , activoProd , stockProd , minProd) VALUES (${idProd},${nombreProd},${fechaIngProd},${precioProd},${monedaProd},${idProv},${activoProd},${stockProd},${minProd})`
//   );

//   db.run(
//     `INSERT O IGNORE INTO productos (idProd, nombreProd, fechaIngProd ) VALUES (?,?,?)`,
//     [idProd, nombreProd, fechaIngProd]
//   );
// });
