const email = document.getElementById('email');
const password = document.getElementById('password');

const handleSubmit = (event) => {
  event.preventDefault();

  const arrayUsers = JSON.parse(localStorage.getItem('users'));
  const foundUser = arrayUsers.find(user => user.email === email.value);

  if (foundUser.password === password.value) {
    alert('Ingresaste con exito');
    localStorage.setItem('authUser', JSON.stringify(foundUser))
    window.location.href = 'http://127.0.0.1:5500/proyectoSegundoModulo/index.html'
  } else {
    alert('Las credenciales ingresadas no son validas')
  }

}