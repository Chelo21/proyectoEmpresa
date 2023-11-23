const { db } = require("../Database/db.js");

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

exports.listarProductos = async (req, res) => {
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

exports.newProduct = async (req, res, next) => {
  let todo = req.params;
  let body = req.body;
  console.log("dodo", req.params);
  console.log("body", req.body);
  res.json({ mensaje: "recibido", susses: "hecho" });
};
