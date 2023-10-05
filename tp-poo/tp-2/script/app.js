// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// verifique si tenemos saldo disponible.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular,
      this.saldo = saldo
  }

  ingresar(cantidad) {
    this.saldo += cantidad
    console.log(`Se ingreso $${cantidad} a la cuenta`)
  }

  extraer(cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
      console.log(`Se sacaron $${cantidad} de la cuenta`)
    } else {
      console.log("EL saldo es insuficiente")
    }
  }

  informar() {
    console.log(`El titular de la cuenta es ${this.titular}`)
    console.log(`El saldo de la cuenta es $${this.saldo}`)
  }
}

const cuenta1 = new Cuenta("Alex");

cuenta1.informar();
cuenta1.ingresar(20000);
cuenta1.informar();
cuenta1.extraer(50000);
cuenta1.extraer(18000);
cuenta1.informar();

