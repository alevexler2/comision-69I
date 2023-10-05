// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// const auto = {
//   color: "gris",
//   marca: "Nissan",
//   modelo: "March",
//   encendido: false,

// enceder() {
//   if (!this.encendido) {
//     this.encendido = true;
//     console.log("Encendimos el auto");
//   } else {
//     console.log("El auto ya esta encendido");
//   }
// },

// apagar() {
//   if (this.encendido) {
//     this.encendido = false;
//     console.log("Apagamos el auto");
//   } else {
//     console.log("El auto ya esta apagado");
//   }
// }
// };

class Auto {
  constructor(color, marca, modelo, encendido) {
    this.color = color,
      this.marca = marca,
      this.modelo = modelo,
      this.encendido = encendido
  }

  encender() {
    if (!this.encendido) {
      this.encendido = true;
      console.log("Encendimos el auto");
    } else {
      console.log("El auto ya esta encendido");
    }
  }

  apagar() {
    if (this.encendido) {
      this.encendido = false;
      console.log("Apagamos el auto");
    } else {
      console.log("El auto ya esta apagado");
    }
  }
}

const auto1 = new Auto("Rojo", "Ford", "Focus", false);

console.log(auto1)