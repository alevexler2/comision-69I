class User {
  constructor(name, lastName, email, userName, password) {
    this.name = name,
      this.lastName = lastName,
      this.email = email,
      this.userName = userName,
      this.password = password
  }
}

const user = new User();

const regexName = /^[A-Za-z\s]{3,41}$/;
const regexUsername = /^[A-Za-z\s]{2,50}$/;
const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,50}$/;

const handleChange = (event) => {

  switch (event.target.id) {
    case 'name':
      if (!regexName.test(event.target.value)) {
        alert("El nombre debe contener entre 3 y 41 caracteres");
      } else {
        user.name = event.target.value.toLowerCase();
      }
      break;
    case 'lastName':
      if (!regexName.test(event.target.value)) {
        alert("El nombre debe contener entre 3 y 41 caracteres");
      } else {
        user.lastName = event.target.value.toLowerCase();
      }
      break
    case 'email':
      if (!regexEmail.test(event.target.value)) {
        alert("Debes ingresar un email valido")
      } else {
        user.email = event.target.value.toLowerCase()
      }
      break
    case 'userName':
      if (!regexUsername.test(event.target.value)) {
        alert("El nombre de usuario no es valido")
      } else {
        user.userName = event.target.value.toLowerCase()
      }
      break
    case 'password':
      if (!regexPass.test(event.target.value)) {
        alert("La contraseña debe tener un minimo de 8 caracteres, una mayuscula, una minuscula y un caracter especial")
      } else {
        user.password = event.target.value
      }
      break
    case 'repeatPassword':
      if (user.password !== event.target.value) {
        alert("Las contraseñas deben coincidir")
      }
      break

  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const saveUsers = JSON.parse(localStorage.getItem('user'));
  if (saveUsers) {
    saveUsers.push(user);
    const jsonUsers = JSON.stringify(saveUsers)
    localStorage.setItem('user', jsonUsers)
  } else {
    let users = [];
    users.push(user);
    const jsonUsers = JSON.stringify(users)
    localStorage.setItem('user', jsonUsers)
  }
}





