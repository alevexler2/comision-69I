//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// const userName = prompt("Ingresa tu nombre");
// document.write(`Hola ${userName}`);

// const edad = prompt("Ingresa tu edad");

// if (edad >= 18) {
//   console.log("La persona es mayor de edad");
// } else {
//   console.log("La persona es menor de edad");
// }

// Escribe un programa en js que determine si un numero ingresado por el usuario es par o impar

// const numero = parseInt(prompt("Ingresa un numero"));

// if (numero % 2 === 0) {
//   console.log("El numero ingresado es par");
//   console.log(numero % 2);
// } else {
//   console.log("El numero ingresado es impar")
//   console.log(numero % 2);
// }

// const estacion = prompt("Ingresa tu estacion del año favorita").toLowerCase();

// if (estacion === "verano") {
//   console.log("La estacion ingresada es verano");
// } else if (estacion === "primavera") {
//   console.log("La estacion ingresada es primavera");
// } else if (estacion === "otoño") {
//   console.log("La estacion ingresada es otoño");
// } else if (estacion === "invierno") {
//   console.log("La estacion ingresada es invierno");
// } else {
//   console.log("No ingresaste una estacion valida");
// }

// switch (estacion) {
//   case "verano":
//     console.log("La estacion ingresada es Verano");
//     break;
//   case "primavera":
//     console.log("La estacion ingresada es Primavera");
//     break;
//   case "otoño":
//     console.log("La estacion ingresada es Otoño");
//     break;
//   case "invierno":
//     console.log("La estacion ingresada es Invierno");
//     break;
//   default:
//     console.log("No ingresaste una estacion valida");
// }

//crea un programa que pida al usuario que ingrese un numero del 1 al 7 para representar un dia de la semana y luego muestre el nombre del dia por consola
// const number = parseInt(prompt("Ingrese un numero del 1 al 7"));

// switch (number) {
//   case 1:
//     console.log("lunes");
//     break;
//   case 2:
//     console.log("martes");
//     break;
//   case 3:
//     console.log("miercoles");
//     break;
//   case 4:
//     console.log("jueves");
//     break;
//   case 5:
//     console.log("viernes");
//     break;
//   case 6:
//     console.log("sabado");
//     break;
//   case 7:
//     console.log("domingo");
//     break;
//   default:
//     console.log("No ingresaste un numero valido");
// }

//Escribe un programa que permita al usuario seleccionar una operacion matematica (suma, resta, multiplicacion o division) y luego realice la operacion con dos numeros ingresados por el usuario

// const operacion = prompt("Ingresa una operacion matematica").toLowerCase();
// const a = parseInt(prompt("Ingresa un numero"));
// const b = parseInt(prompt("Ingresa otro numero"));

// switch (operacion) {
//   case "suma":
//     console.log(a + b);
//     break;
//   case "resta":
//     console.log(a - b);
//     break;
//   case "multiplicacion":
//     console.log(a * b);
//     break;
//   case "division":
//     console.log(a / b);
//     break;
//   default:
//     console.log("La operacion ingresada no es valida");
// }

// let i = 1;

// console.log("Aca arranca el bucle");

// while (i <= 1000) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 1000)

// console.log("aca termina el bucle");
