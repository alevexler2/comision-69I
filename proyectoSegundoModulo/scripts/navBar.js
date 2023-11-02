//Accedemos a un nodo de nuestro documento
const container = document.getElementById('navContainer');

//Variables para definir las rutas de nuestras etiquetas <a></a>
let urlHome;
let urlLogin;
let urlRegister;

//Condicional para asignar las rutas a nuestras variables
if (window.location.href == 'http://127.0.0.1:5500/proyectoSegundoModulo/index.html') {
  urlHome = './index.html'
  urlRegister = './pages/register.html'
  urlLogin = './pages/login.html'
} else {
  urlHome = '../index.html'
  urlRegister = './register.html'
  urlLogin = './login.html'
}

//Accediendo a la key authUser del localStorage
const authUser = JSON.parse(localStorage.getItem('authUser'));

//Inyectamos un navbar de bootstrap a nuestro documento
container.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href=${urlHome}>Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href=${urlHome}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=${urlLogin} id="loginLink">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=${urlRegister} id="registerLink">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="logOutLink" onclick="logout()">Logout</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
`

const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const logoutLink = document.getElementById('logOutLink');

if (!authUser) {
  loginLink.className = 'nav-link'
  registerLink.className = 'nav-link'
  logoutLink.className = 'd-none'
} else {
  loginLink.className = 'd-none'
  registerLink.className = 'd-none'
  logoutLink.className = 'nav-link'
}

const logout = () => {
  localStorage.removeItem('authUser')
  window.location.reload()
}
