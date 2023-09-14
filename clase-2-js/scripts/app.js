// let aux = 1;
// console.log({ valorInicial: aux })
// aux++;
// console.log({ valorIncrementado: aux });
// aux--;
// console.log({ valorDecrementado: aux });
// let resultado = 3 > 5;
// console.log(!resultado);

// console.log(3 < 1 && 3 > 8);

// console.log(3 < 5 || 3 > 10);

const apellido = "VeXlEr";

//Metodo .length sirve para saber la cantidad de caracteres de un string
// console.log(apellido.length);

//toLowerCase que va a convertir una cadena de texto en minuscula

// console.log(apellido.toLowerCase());

//toUperCase que va a convertir una cadena de texto en mayuscula

// console.log(apellido.toUpperCase());

//slice que nos va a permitir cortar una cadena de texto

// console.log(apellido.slice(3, 6));

//index of devuelve el indice donde arranca la posicion de una palabra dentro de un string

let str = "Hola mundo !"
let index = str.indexOf("mundo");
// console.log(str.slice(index, 11));

//parseInt convierte un numero de tipo texto a tipo number
// const edad = prompt("Ingresa tu edad");
// console.log(typeof edad);
const strInt = "42";
const numInt = parseInt(strInt); // Devuelve 42
// console.log(typeof strInt);
// console.log(typeof numInt);

//round redondea para arriba y floor redondea para abajo
const num = 3.9;
const rounded = Math.round(num); // Devuelve 4
const floored = Math.floor(num); // Devuelve 3
// console.log(floored)

//isNan (Not a number) evalua si el valor que recibe como parametro no es un numero, si no lo es retorna true, y si es un numero retornara false
// console.log(isNaN("Hola")); // Devuelve true
// console.log(isNaN(42)); // Devuelve false

//al igual que parseInt el metodo Number va a convertir un valor de tipo string al tipo number
const strNum = "42";
const toNum = Number(strNum); // Devuelve 42

//el metodo random devuelve un numero aleatorio entre 0 y 1
const randomNum = Math.random(); // Devuelve un número aleatorio entre 0 y 1
// console.log(Math.round(randomNum * 3));

//condicional if

// const edad = prompt("Ingresa tu edad");
// const billetera = prompt("Cuanta plata tenes en la billetera");

// if (edad <= 18 || edad >= 65) {
//   console.log("Pertene a un grupo de riesgo");
// }

// if (edad >= 18 && billetera >= 2000) {
//   console.log("Podes entrar al boliche");
// }

//condicional if else

// if (edad >= 18 && billetera >= 2000) {
//   console.log("Podes pasar al boliche");
// } else {
//   console.log("No podes pasar");
// }

let numero = prompt("Ingresa un numero");

// if (numero > 10) {
//   console.log("El numero es mayor a 10");
// } else {
//   if (numero < 10) {
//     console.log("El numero es menor a 10");
//   } else {
//     console.log("el numero es igual a 10");
//   }
// }

if (numero > 10) {
  console.log("El numero es mayor a 10");
} else if (numero < 10) {
  console.log("El numero es menor a 10");
} else {
  console.log("el numero es igual a 10");
}

//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
