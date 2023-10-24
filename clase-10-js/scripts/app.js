class User {
  constructor(name, lastName, email, userName, password) {
    this.name = name,
      this.lastName = lastName,
      this.email = email,
      this.userName = userName,
      this.password = password
  }
}

let nombre;
let apellido;
let email;
let nombreUsuario;
let password;
let repeatPassword;

const handleName = (event) => {
  if (event.target.value.length < 3) {
    alert("El nombre debe tener por lo menos 3 caracteres")
  } else {
    nombre = event.target.value
  }
}

const handleLastName = (event) => {
  if (event.target.value.length < 3) {
    alert("El apellido debe tener por lo menos 3 caracteres")
  } else {
    apellido = event.target.value
  }
}

const handleEmail = (event) => {
  if (!event.target.value.includes("@") || event.target.value.length < 6) {
    alert("Ingresa un email valido: El email debe tener por lo menos 6 caracteres y contener un @")
  } else {
    email = event.target.value
  }
}

const handleUserName = (event) => {
  if (event.target.value.length < 2) {
    alert("El nombre de usuari debe tener por lo menos 2 caracteres")
  } else {
    nombreUsuario = event.target.value
  }
}

const handlePassword = (event) => {
  if (event.target.value.length < 8) {
    alert("El password debe tener por lo menos 8 caracteres")
  } else {
    password = event.target.value
  }
}

const handleRepeatPassword = (event) => {
  if (event.target.value !== password) {
    alert("Las contraseñas deben coincidir")
  } else {
    repeatPassword = event.target.value
  }
}

const handleForm = (event) => {
  event.preventDefault()
  const usuario = new User(nombre, apellido, email, nombreUsuario, password)
  localStorage.setItem('users', usuario)
}