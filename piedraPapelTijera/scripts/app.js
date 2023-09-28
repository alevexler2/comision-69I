//Desarrollar un script que pida al usuario elegir una opcion
//tiene que calcular automaticamente una opcion para la computadora
//comparar los dos valores
//definir el ganador

const opciones = ["piedra", "papel", "tijera"];

const jugadaUsuario = () => {
  let opcionUsuario = prompt("Elige Piedra, Papel o Tijera").toLocaleLowerCase();

  if (opciones.includes(opcionUsuario)) {
    return opcionUsuario
  } else {
    alert(`La opcion ingresada (${opcionUsuario}) no es correcta, por favor ingresa piedra, papel o tijera`);
  }
};

const jugadaMaquina = () => {
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice]
};

const determinarGanador = (usuario, maquina) => {
  if (usuario === maquina) {
    return "Empataron"
  } else if ((usuario === "piedra" && maquina === "tijera") || (usuario === "papel" && maquina === "piedra") || (usuario === "tijera" && maquina === "papel")) {
    return "Ganaste"
  } else {
    return "Perdiste"
  }
}

const iniciarJuego = () => {
  const seleccionJugador = jugadaUsuario();
  if (seleccionJugador) {
    const seleccionMaquina = jugadaMaquina();
    console.log(`Vos elegiste ${seleccionJugador}`)
    console.log(`La maquina eligio ${seleccionMaquina}`)

    const resultado = determinarGanador(seleccionJugador, seleccionMaquina);
    console.log(resultado)
  } else {
    iniciarJuego()
  }
}

iniciarJuego()
