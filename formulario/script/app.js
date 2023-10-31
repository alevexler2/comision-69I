class User {
  constructor(name, lastName, email, userName, password) {
    this.name = name,
      this.lastName = lastName,
      this.email = email,
      this.userName = userName,
      this.password = password
  }
}

const submitBtn = document.getElementById('submitButton');
const labelValidationName = document.getElementById('validationLabelName');

const user = new User();

const regexName = /^[A-Za-z\s]{3,41}$/;
const regexUsername = /^[A-Za-z\s]{2,50}$/;
const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

const validateFields = () => {
  const isNameValid = regexName.test(user.name);
  const isLastNameValid = regexName.test(user.lastName);
  const isEmailValid = regexEmail.test(user.email);
  const isUserNameValid = regexUsername.test(user.userName);
  const isPasswordValid = regexPass.test(user.password);
  const isRepeatPasswordValid = regexPass.test(user.repeatPassword);

  const validationSuccesfull = isNameValid && isLastNameValid && isEmailValid && isUserNameValid && isPasswordValid && isRepeatPasswordValid;

  return validationSuccesfull;
}

const handleChange = (event) => {

  switch (event.target.id) {
    case 'name':
      if (!regexName.test(event.target.value)) {
        labelValidationName.className = 'text-danger d-inline'
        user.name = '';
        event.target.style.border = '2px solid red'
      } else {
        labelValidationName.className = 'd-none'
        event.target.style.border = '2px solid green'
        user.name = event.target.value.toLowerCase();
      }
      break;
    case 'lastName':
      if (!regexName.test(event.target.value)) {
        alert("El nombre debe contener entre 3 y 41 caracteres");
        event.target.style.border = '2px solid red'
        user.lastName = '';
      } else {
        event.target.style.border = '2px solid green'
        user.lastName = event.target.value.toLowerCase();
      }
      break
    case 'email':
      if (!regexEmail.test(event.target.value)) {
        alert("Debes ingresar un email valido")
        event.target.style.border = '2px solid red'
        user.email = ''
      } else {
        event.target.style.border = '2px solid green'
        user.email = event.target.value.toLowerCase()
      }
      break
    case 'userName':
      if (!regexUsername.test(event.target.value)) {
        alert("El nombre de usuario no es valido")
        event.target.style.border = '2px solid red'
        user.userName = ''
      } else {
        event.target.style.border = '2px solid green'
        user.userName = event.target.value.toLowerCase()
      }
      break
    case 'password':
      if (!regexPass.test(event.target.value)) {
        alert("La contraseña debe tener un minimo de 8 caracteres, una mayuscula, una minuscula y un caracter especial")
        event.target.style.border = '2px solid red'
        user.password = ''
      } else {
        event.target.style.border = '2px solid green'
        user.password = event.target.value
      }
      break
    case 'repeatPassword':
      if (user.password !== event.target.value) {
        alert("Las contraseñas deben coincidir")
        event.target.style.border = '2px solid red'
        user.repeatPassword = ''
      } else {
        event.target.style.border = '2px solid green'
        user.repeatPassword = event.target.value
      }
      break

  }
  const validation = validateFields();

  if (validation) {
    submitBtn.removeAttribute('disabled')
  } else {
    submitBtn.setAttribute('disabled', 'true')
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const saveUsers = JSON.parse(localStorage.getItem('users'));
  if (saveUsers) {
    saveUsers.push(user);
    const jsonUsers = JSON.stringify(saveUsers)
    localStorage.setItem('users', jsonUsers)
  } else {
    let users = [];
    users.push(user);
    const jsonUsers = JSON.stringify(users)
    localStorage.setItem('users', jsonUsers)
  }
}
