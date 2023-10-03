// const usuario = {
//   nombre: "Luciano",
//   apellido: "LLanos",
//   edad: 19,
//   email: "email@gmail.com",
//   password: "Test1234",
//   pais: "Argentina",
// }

//maneras de acceder a propiedades de objetos
// console.log(`El apellido del objeto usuario es ${usuario.apellido}`);

// console.log(usuario["pais"]);

//añadiendo nueva propiedad a un objeto
// usuario.membresia = true;

// usuario.membresia = false;

// delete usuario.membresia;
// console.log(usuario)

// Recorriendo propiedades de objetos

// for (const key in usuario) {
//   console.log(usuario[key])
// }

// const keys = Object.keys(usuario);

// keys.map((key) => {
//   console.log(usuario[key])
// });

// const products = [
//   {
//     id: 1,
//     name: "leche",
//     price: 120,
//     categories: ["familiar", "comida"],
//     vencimiento: "2023-12-10"
//   },
//   {
//     id: 2,
//     name: "arroz",
//     price: 80,
//     categories: ["familiar", "comida"]
//   },
//   {
//     id: 3,
//     name: "lavadora",
//     price: 7800,
//     categories: ["electrodomesticos"]
//   },
// ];

// products.map((product) => {
//   console.log(product.name)
//   console.log(`Id: ${product.id}`)
//   console.log(`Precio: ${product.price}`)
//   console.log(`Categorias: ${product.categories.join(" - ")}`)
// })

// products.map((product) => {
//   const keys = Object.keys(product);
//   keys.forEach((key) => {
//     console.log(`${key}: ${product[key]}`)
//   })
// })

//creacion de objeto con notacion literal

// const usuario = {
//   nombre: "Luciano",
//   apellido: "LLanos",
//   edad: 19,
//   email: "email@gmail.com",
//   password: "Test1234",
//   pais: "Argentina",
// }

//Funciones constructoras

// function Usuario(name, lastName, age, email, password, country) {
//   this.nombre = name,
//     this.apellido = lastName,
//     this.edad = age,
//     this.email = email,
//     this.contraseña = password,
//     this.pais = country
// }

// const persona1 = new Usuario("Santiago", "Gil Mina", 19, "santi@gmail.com", "Test1234", "Argentina");

// EL constructor Object()

// const auto = new Object();

// auto.color = "gris";
// auto.marca = "Citroen";
// auto.modelo = "C4";
// auto.año = 2023;

// console.log(auto)

// Mediante el metodo Object.create();
// const auto2 = Object.create(auto);

// auto2.color = "rojo"
// console.log(auto2)

// const mascota1 = {
//   especie: "perro",
//   nombre: "boby",
// }

// const mascota2 = mascota1

// console.log(mascota1 == mascota2)

// const fecha = new Date();
// console.log(fecha.getMonth())

function Usuario(name, lastName, age, email, password, country) {
  this.nombre = name,
    this.apellido = lastName,
    this.edad = age,
    this.email = email,
    this.contraseña = password,
    this.pais = country
}

class Persona {
  constructor(name, lastName, age, email, password, country) {
    this.nombre = name,
      this.apellido = lastName,
      this.edad = age,
      this.email = email,
      this.contraseña = password,
      this.pais = country
  }
  comer() {
    alert(`${this.nombre} esta comiendo`)
  }
}

const persona1 = new Persona("Dante", "Cesca", 29, "dante@gmail.com", "Teste1234", "Argentina");
console.log(persona1)

persona1.comer();