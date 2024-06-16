import  useFetch  from "./Provaider/useFetch.js"
// const { useFetch } = require("./Provaider/useFetch.js");

// const url =`http://localhost:3333/productos/all`

// const options ={
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: '{}',
// }
// useFetch(url).then((response) =>
//     console.log(response)
// )

const url =`http://localhost:3333/productos/busqueda`

const options ={
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: '{"nombreProd":"x","tipo_Busqueda":0, "activoProd":0 }',
}
useFetch(url, options).then((response) =>
    console.log(response)
)

//"idProd":""