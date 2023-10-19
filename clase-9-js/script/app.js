// //Accediendo al nodo a travez de la etiqueta
// const myTag = document.getElementsByTagName('p');
// console.log(myTag[2].textContent)

// //Acceder al nodo mediante su clase
// const myClass = document.getElementsByClassName('myClass');

// console.log(myClass[2].tagName)

//Acceder a un nodo mediante su id
// const myId = document.getElementById('myId');

// console.log(myId)

// //Acceder mediante el metodo querySelector
// const querySelector = document.querySelector('#myId')

// console.log(querySelector)

// //Acceder a todos los nodos utilizando querySelectorAll
// const querySelectorAll = document.querySelectorAll('.myClass')
// console.log(querySelectorAll)

//Crear un nuevo nodo e inyectarlo al documento
// const myp = document.createElement('p');
// myp.innerText = "Hola soy una etiqueta p crada a travez de dom"
// myp.style.border = "2px solid blue"
// myp.style.color = "red"
// console.log(myp)
// document.body.appendChild(myp)


//Clonar un nodo sin su contenido
// const newPWhitoutContent = myId.cloneNode(false);
// console.log(newPWhitoutContent);

//Clonar un nodo con su contenido
// const newPwhithContent = myId.cloneNode(true);
// console.log(newPwhithContent)

// document.body.insertBefore(
//   document.createTextNode('Boo!'),
//   document.body.firstChild
// )

// const container = document.getElementById('myList')
// const li1 = document.createElement('li')
// li1.innerText = 'Carne'
// container.innerHTML = '<li>Verduras</li>'
// container.appendChild(li1)
// const container = document.getElementById('container')

// const myProducts = [
//   {
//     nombre: 'Auriculares jbl',
//     precio: 25000,
//     stock: 1,
//     descripcion: 'Auriculares inalambricos',
//     img: 'https://http2.mlstatic.com/D_NQ_NP_2X_990510-MLA46540370833_062021-F.webp'
//   },
//   {
//     nombre: 'Mouse logitech',
//     precio: 10000,
//     stock: 23,
//     descripcion: 'Mouse inalambrico',
//     img: 'https://http2.mlstatic.com/D_NQ_NP_2X_945737-MLA50896130021_072022-F.webp'
//   },
//   {
//     nombre: 'Teclado razer',
//     precio: 15000,
//     stock: 16,
//     descripcion: 'Teclado mecanico',
//     img: 'https://http2.mlstatic.com/D_NQ_NP_2X_976907-MLA50895822354_072022-F.webp'
//   },
// ]

// myProducts.map((product) => {
//   container.innerHTML += `
//   <div class="card col-6">
//     <img src=${product.img} class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${product.nombre}</h5>
//       <p class="card-text">${product.descripcion}</p>
//       <p class="card-text">$${product.precio}</p>
//       <a href="#" class="btn btn-primary">Comprar</a>
//     </div>
//   </div>
//   `
// })

// const myp = document.getElementsByTagName('p');
// const removed = document.body.removeChild(myp[0])
// console.log(myp)
// console.log(removed)
// const replaced = document.body.replaceChild(removed, myp[0])

const saludar = () => {
  alert('Hola te estoy saludando')
}

const modoOscuro = () => {
  const pList = document.querySelectorAll('p');
  const keys = Object.keys(pList)
  keys.map((key) => {
    if (pList[key].style.color == 'black') {
      pList[key].style.color = 'white'
    } else {
      pList[key].style.color = 'black'
    }
  })

  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = "white"
  }
}

const myp = document.createElement('p')
myp.innerText = 'probando luces de neon';
myp.style.boxShadow = "8px 10px 91px 0px rgba(216,84,84,0.75)";
document.body.appendChild(myp)

setInterval(() => {
  if (myp.style.boxShadow == "8px 10px 91px 0px rgba(216,84,84,0.75)") {
    myp.style.boxShadow = "8px 10px 91px 0px rgb(108,84,216)"
  } else {
    myp.style.boxShadow = "8px 10px 91px 0px rgba(216,84,84,0.75)"
  }
}, 500)
