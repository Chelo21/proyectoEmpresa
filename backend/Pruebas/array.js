var unos = [];
const pepe = "hola";
const luis = "luis torales";
const juan = "el sapo";
const camino = "camino";
const todo = [pepe, luis, juan, camino];
const esto = `${pepe},${luis},${juan},${camino},`;
unos.push(pepe);
unos.push(luis);
unos.push(juan);
unos.push(camino);
const alfa = todo.join(" ");
const beta = unos.join(" ");

if (alfa == beta) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}
// console.log(todo);
// console.log(esto);
// console.log(unos);
console.log(alfa);
console.log(beta);
console.log("el texto");
