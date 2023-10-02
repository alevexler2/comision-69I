class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    const generacion = this.calculaGeneracion();
    let rasgoCaracteristico = "";

    switch (generacion) {
      case "Silent Generation":
        rasgoCaracteristico = "Son conocidos por su disciplina y adaptabilidad.";
        break;
      case "Baby Boomers":
        rasgoCaracteristico = "Tienen un fuerte sentido de comunidad y compromiso social.";
        break;
      case "Generación X":
        rasgoCaracteristico = "Destacan por su independencia y pragmatismo.";
        break;
      case "Millennials":
        rasgoCaracteristico = "Son nativos digitales y valoran la diversidad.";
        break;
      case "Generación Z":
        rasgoCaracteristico = "Crecieron en un mundo hiperconectado y tecnológico.";
        break;
      default:
        rasgoCaracteristico = "No se pudo determinar la generación.";
    }

    console.log(`Pertenece a la generación ${generacion}. ${rasgoCaracteristico}`);
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    console.log("Información de la persona:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Altura: ${this.altura} cm`);
    console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
    console.log(`DNI: ${this.DNI}`);
    console.log(`Es mayor de edad: ${this.esMayorDeEdad() ? 'Sí' : 'No'}`);
  }

  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }

  calculaGeneracion() {
    if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
      return "Silent Generation";
    } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
      return "Baby Boomers";
    } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
      return "Generación X";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1996) {
      return "Millennials";
    } else if (this.anioNacimiento >= 1997) {
      return "Generación Z";
    } else {
      return "Desconocida";
    }
  }
}

// Ejemplo de uso:
const persona1 = new Persona("Juan", 25, "H", 70, 175, 1998);
persona1.mostrarDatos();
persona1.mostrarGeneracion();
