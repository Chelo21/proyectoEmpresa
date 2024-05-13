// var React = require("react");
// // const { useState } = React;
// const useState = React.useState(0);
// const [contar, setcontar] = new useState([
//   {
//     activo: 0,
//     inactivo: 0,
//   },
// ]);
const { db } = require("../Database/db.js");

const findID = async (idProd) => {
  // console.log("entro>>> ",idProd)
  // var idProd = req.params.id;
  if (idProd < 0) {
    idProd = 0;
  }

  return new Promise(function(resolve, reject) {
    db.get(
      "SELECT COUNT(*) contador FROM productos where idProd=?",
      [idProd],
      function (err, row) {
        if (err) {
          console.log(err)
          reject.send("Error encountered while displaying");
          // return err.message;
          // resolve([{1}]);
        }
        // console.log(lastIDProdA());
        console.log("sale aca row ",row.contador);
    if(row.contador==0){
       resolve(-1);
    } else {

       resolve(1 );
    }
      
      }
    );
  
  })
 

};
// ============ ejecuto ====================
// findID(421).then(valor=>console.log("el valor salido ",valor)) 
// findID(200).then(valor=>console.log("el valor salido ",valor))
// ============ ejecuto ====================

exports.existeIDProd = async (req, res) => {
  var idProd = req.params.id;
  if (idProd < 0) {
    idProd = 0;
  }

  db.get(
    "SELECT COUNT(*) contador FROM productos where idProd=?",
    [idProd],
    function (err, row) {
      if (err) {
        res.send("Error encountered while displaying");
        return console.error(err.message);
      }
      // console.log(lastIDProdA());
      console.log(row);
      return res.send(row);
    }
  );
};

exports.lastIDProd = async (req, res) => {
 

  db.get("SELECT max(idProd) ID FROM productos", function (err, row) {
    if (err) {
      res.send("Error encountered while displaying");
      return console.error(err.message);
    }
    // console.log(lastIDProdA());
    console.log(row);
    return res.send(row);
  });
};

exports.listarProd = async (req, res) => {
  db.all("SELECT * FROM productos order by idProd", function (err, row) {
    if (err) {
      res.send("Error encountered while displaying");
      return console.error(err.message);
    }
    console.log(lastIDProdA());

    // console.log(row);
    return res.send(row);
  });
  // res.json({ message: `Todos los datos:` });
};

exports.totalProd = async (req, res) => {
  let activo= req.params.cont;
  let prodA = new Promise((resolve, reject) => {
    let query; 
    if (activo===0 || activo===1){

      query= `SELECT count(*) activo FROM productos where activoProd=${activo}`;
    } else{
      query= `SELECT count(*) activo FROM productos`;

    }

    db.get(query, (err, row) => {
      if (err) reject(err); // I assume this is how an error is thrown with your db callback
      // console.log("inactvio", row);
      resolve(row.activo);
    });
  });

  let prodI = new Promise((resolve, reject) => {
    let query = `SELECT count(*) inactivo FROM productos where activoProd=0`;
    db.get(query, (err, row) => {
      if (err) reject(err); // I assume this is how an error is thrown with your db callback
      // console.log("activo", row);
      resolve(row.inactivo);
    });
  });

  let Todo = [
    {
      activo: await prodA,
      inactivo: await prodI,
    },
  ];

  return res.json(Todo);
};

exports.allWhere = async (req, res) => {
  // findID(9).then(datos=>console.log(datos))

  
  let promise = new Promise(function (resolve, reject) {
    
    console.log("entro en busqueda")
    console.log(findID(9)) 
    var todo = [];
    var query, queryA;
    var idProd,
      nombreProd,
      fechaIngProd,
      precioProd,
      monedaProd,
      idProv,
      activoProd,
      stockProd,
      minProd,
      maxLines,
      pagLines,
      limit,
      offset;
    // console.log(req.body);

    idProd = req.body.idProd;
    nombreProd = req.body.nombreProd;
    fechaIngProd = req.body.fechaIngProd;
    precioProd = req.body.precioProd;
    monedaProd = req.body.monedaProd;
    idProv = req.body.idProv;
    activoProd = req.body.activoProd;
    stockProd = req.body.stockProd;
    minProd = req.body.minProd;
    pagLines = req.body.pagLines; // número de páginas
    maxLines = req.body.maxLines; // líneas por páginas
    if (pagLines < 0 || pagLines == "") {
      pagLines = 0;
    }

    if (maxLines < 0 || maxLines == "") {
      maxLines = 10;
    }

    if (Number(pagLines) > 0) {
      limit = `OFFSET ${pagLines}`;
    } else {
      limit = "";
    }

    if (Number(maxLines) > 0) {
      offset = `LIMIT ${maxLines}`;
    } else {
      offset = "";
    }

    queryA = "";
    query = "SELECT * FROM productos Where";
    if (idProd) queryA += ` idProd LIKE '${idProd}'`;

    if (nombreProd && queryA.length > 0) queryA += ` OR`;
    if (nombreProd) queryA += ` nombreProd LIKE '%${nombreProd}%'`;

    if (queryA.length > 0 && fechaIngProd) queryA += ` OR`;
    if (fechaIngProd) queryA += ` fechaIngProd LIKE '%${fechaIngProd}%'`;
    if (queryA.length > 0 && precioProd) queryA += ` OR`;
    if (precioProd) queryA += ` precioProd LIKE '${precioProd}%'`;
    if (queryA.length > 0 && monedaProd) queryA += ` OR`;

    if (monedaProd) queryA += ` monedaProd LIKE '%${monedaProd}%'`;
    if (queryA.length > 0 && idProv) queryA += ` OR`;
    if (idProv) queryA += ` idProv LIKE '%${idProv}%'`;
    if (queryA.length > 0 && activoProd) queryA += ` OR`;

    if (activoProd) queryA += ` activoProd LIKE '${activoProd}'`;
    if (queryA.length > 0 && stockProd) queryA += ` OR`;
    if (stockProd) queryA += ` stockProd LIKE '${stockProd}'`;

    if (queryA.length > 0 && minProd) queryA += ` OR`;
    if (minProd) queryA += ` minProd LIKE '${minProd}'`;
    console.log(req.body.idProd);
    // console.log(queryA);
    console.log(`largo `, queryA.length);
    // ===== cargo toda la consulta =================
    if (queryA.length > 0) {
      // ==== limite y offset =============
      queryA += " " + limit + " " + offset;
      query += queryA;
      // console.log(`el query: `, query);
    } else {
      return reject.json({ mensaje: "no hay datos: ", queryA });
    }

    // =========================== consulta
    db.all(query, function (err, rows) {
      if (err) {
        return reject(err);
      }
      // console.log(rows);
      return resolve(rows);
    });
    // return resolve(query);
  });
  

  promise.then((row) =>{
    // console.log(row);
    res.json({ datos: row })

  } 

);

  
};

exports.newProduct = async (req, res) => {
  let pepe = await findID(req.body.idProd).then(valor=> valor)
 console.log("salida pepe ",pepe)
 
 let todo = req.params;
  let body = req.body;
  // console.log("dodo", req.params);
  console.log("body", body);
if (pepe===1){
  return res.json({ mensaje: `existe: ${req.body.idProd}`, susses: "error" }); 
}
  res.json({ mensaje: "recibido", susses: "hecho" });
};

const lastIDProdA = async () => {
  db.run("SELECT max(idProd) FROM productos", function (err, row) {
    if (err) {
      console.error(err.message);
      return err;
    }
    console.log(row);
    return row;
  });
};

const contarProductosA = async () => {
  let prodA = new Promise((resolve, reject) => {
    let query = `SELECT count(*) activo FROM productos where activoProd=1`;
    db.get(query, (err, row) => {
      if (err) reject(err); // I assume this is how an error is thrown with your db callback
      // console.log("inactvio", row);
      resolve(row.activo);
    });
  });

  let prodI = new Promise((resolve, reject) => {
    let query = `SELECT count(*) inactivo FROM productos where activoProd=0`;
    db.get(query, (err, row) => {
      if (err) reject(err); // I assume this is how an error is thrown with your db callback
      // console.log("activo", row);
      resolve(row.inactivo);
    });
  });

  let Todo = [
    {
      activo: await prodA,
      inactivo: await prodI,
    },
  ];

  console.log(Todo);
};

// const existeIDProdA = async (req) => {
//   var idProd = req;
//   if (idProd < 0) {
//     idProd = 0;
//   }

//   db.get(
//     "SELECT COUNT(*) contador FROM productos where idProd=?",
//     [idProd],
//     function (err, row) {
//       if (err) {
//         // res.send("Error encountered while displaying");
//         console.log(err.message);
//       }
//       // console.log(lastIDProdA());
//       console.log(row);
//       // return row;
//     }
//   );
// };

contarProductosA();

// .then(mate => console.log(mate))
// existeIDProdA(501);

// CREATE TABLE productos (idProd	INTEGER NOT NULL UNIQUE, nombreProd TEXT, fechaIngProd TEXT, precioProd REAL DEFAULT 0,monedaProd TEXT DEFAULT '$', idProv INTEGER DEFAULT 0, activoProd INTEGER DEFAULT 1, stockProd REAL DEFAULT 0, minProd REAL DEFAULT 0, autoProd INTEGER PRIMARY KEY AUTOINCREMENT)

// let cliI = new Promise((resolve, reject) => {
//   let query = `SELECT count(*) as inactivo FROM clientes where activo=0`;
//   db.get(query, (err, row) => {
//     if (err) reject(err); // I assume this is how an error is thrown with your db callback
//     console.log("inactvio", row);
//     resolve(row);
//   });
// });

// try {
//   const activo = db.run("SELECT COUNT(*) contador FROM productos");
//   console.log(" ek ordyucti ", activo);
// } catch (error) {
//   if (error) {
//     console.log(error);
//   }
// }

//   db.all("SELECT * FROM productos order by idProd", function (err, row) {
//     if (err) {
//       res.send("Error encountered while displaying");
//       return console.error(err.message);
//     }
//     console.log(lastIDProdA());

//     // console.log(row);
//     return res.send(row);
//   });
