// class Persona {
//   constructor(name, lastName, email, password, admin) {
//     this.nombre = name,
//       this.apellido = lastName,
//       this.correo = email,
//       this.contraseña = password,
//       this.admin = admin
//   }
// }

// const persona1 = new Persona("rick", "Sanchez", "rick@gmail.com", "Test1234");
// const persona2 = new Persona("Morty", "Smith", "morty@gmail.com", "Test1234");
// const persona3 = new Persona();

// console.log(persona2.apellido);

//Setter y getter

// class Producto {

//   constructor(nombre, precio) {
//     this.nombre = nombre,
//       this.precio = precio
//   }

//   set actualizarPrecio(precio) {
//     this.precio = precio
//   }
//   get precioFormateado() {
//     return this.precio.toFixed(2);
//   }
// }

// const producto1 = new Producto("Leche", 370);

// console.log(producto1)

// console.log(producto1.precioFormateado)
// producto1.actualizarPrecio = 450;
// console.log(producto1.precioFormateado)

class Rectangle {
  constructor(height = 0, width = 0) {
    this.height = height,
      this.width = width
  }

  set changeHeight(height) {
    this.height = height;
  }

  set changeWidth(width) {
    this.width = width;
  }

  get getArea() {
    return this.height * this.width;
  }
}

const rectangulo = new Rectangle();

rectangulo.changeHeight = 10;
rectangulo.changeWidth = 20;

const area = rectangulo.getArea;
console.log(area);
