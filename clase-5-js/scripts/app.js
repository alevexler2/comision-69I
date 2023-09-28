//Funciones en Java Script

// saludar();
//Funciones declarativas

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

// console.log(resta(10, 5))

// Funciones anonimas

// const suma = function (a, b) {
//   let resultado = a + b;
//   return resultado
// }
// console.log(suma(10, 10))
const suma = (a, b) => a + b;

// console.log(suma(33, 47));

// Funciones flechas o arrow functions

const multiplo = (a, b) => {
  const resultado = a * b;
  return resultado
}

// const saludar = nombre => console.log(`Hola ${nombre}`)

// console.log(multiplo(10, 10))

const mascotas = ["perro", "gato", "loro", "perro", "tortuga", "peces"];

const nuevoArray = mascotas.filter((mascota) => {
  return mascota === "perro"
});

console.log(nuevoArray);
