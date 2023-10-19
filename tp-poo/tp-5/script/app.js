// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso, altura y año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:

// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

// mostrarDatos: devuelve toda la información del objeto.

// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento) {
    this.nombre = nombre,
      this.edad = edad,
      this.sexo = sexo,
      this.peso = peso,
      this.altura = altura,
      this.nacimiento = nacimiento,
      this.dni = this.generaDNI()
  }

  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    let rasgoCaracteristico = '';

    switch (generacion) {
      case "Generacion Z":
        rasgoCaracteristico = "Irreverencia";
        break;
      case "Generacion Y":
        rasgoCaracteristico = "Frustracion";
        break;
      case "Generacion x":
        rasgoCaracteristico = "Obsesion por el exito";
        break;
      case "Baby boom":
        rasgoCaracteristico = "Ambision";
        console.log("Ambision");
        break;
      case "Silent Generation":
        rasgoCaracteristico = "Austeridad";
        console.log("Austeridad");
        break;
      default:
        rasgoCaracteristico = "No pudimos determinar a que generacion pertenece la persona";
    }

    console.log(`La generacion a la que pertenece la persona es ${generacion} y su rasgo caracteristico es ${rasgoCaracteristico}`);
  }

  calcularGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      return "Generacion Z"
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      return "Generacion Y"
    } else if (this.nacimineto >= 1969 && this.nacimiento <= 1980) {
      return "Generacion x"
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      return "Baby boom"
    } else if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      return "Silent Generation"
    }
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    console.log({
      InformacionPersona: {
        nombre: `El nombre de la persona es: ${this.nombre}`,
        edad: `la edad de la persona es: ${this.edad}`,
        sexo: `El sexo de la persona es: ${this.sexo}`,
        peso: `El peso de la persona es: ${this.peso}`,
        altura: `la altura de la persona es: ${this.altura}`,
        fechaNacimiento: `la fecha de nacimiento de la persona es: ${this.nacimiento}`,
        DNI: `El DNI de la persona es: ${this.dni}`
      }
    })
  }
}

const persona1 = new Persona("Leonel Messi", 36, "Masculino", 70, 1.7, 1987);

persona1.mostrarDatos();
persona1.mostrarGeneracion();
