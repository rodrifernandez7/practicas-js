let tableBody = document.getElementById("tableBody");
let btnBorrar = document.querySelector(".btnBorrar");
let numCantCarrito = document.getElementById("cartAmount");
let totalCarrito = document.getElementById("totalCarrito");
let btnDecrementar = document.querySelector(".bi-dash-square");
let btnIncrementar = document.getElementById("btnIncrementar");


let carrito = [];

async function mostrarProductos() {
  const respuesta = await fetch("../data.json");
  const data = await respuesta.json();

  function ordernarAlfabeticamente(x, y) {
    //funcion para que aparezcan los productos ordenados alfabeticamente.
    return x.nombre.localeCompare(y.nombre);
  }
  let s = data.sort(ordernarAlfabeticamente);

  data.forEach((producto) => {
    let crearDiv = document.createElement("div");

    crearDiv.innerHTML += `<div class="card">
            <img src="${producto.imagen}" class="imagenes card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text"> $ ${producto.precio}</p>
              <button id="button${producto.id}" class="btnAddCarrito"><i class="bi bi-bag"></i></button>
            </div>
            </div>`;

    let divContenedor = document.querySelector(".contenedor"); //capturo el div con clase 'contenedor' ya creado en el html.

    divContenedor.appendChild(crearDiv);

    let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);

    btnAgregarAlCarrito.addEventListener("click", () =>
      agregarAlCarrito(producto.id)
    );

    
    const agregarAlCarrito = (prodId) => { //id que me va a llegar como parametro
      let productoExistente = carrito.some((producto) => producto.id === prodId); //some comprueba si al menos un elemento del array cumple con la condición.

      if (productoExistente) {
        carrito.map((producto) => {
          if (producto.id === prodId) {
            alert('Este producto ya se encuentra en tu carrito.')//map crea un nuevo array modificado
          }
        });
      } else {
        const prodEncontrado = data.find((producto) => producto.id === prodId); //hago un find que me encuentre el producto con id = al id que me llega por parametro(prodId).
        carrito.push(prodEncontrado);
        Swal.fire({
          text: `${producto.nombre} añadido al carrito.`,
          imageUrl: `${producto.imagen}`,
          imageWidth: 284,
          imageHeight: 284,
          imageAlt: "Product Image",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#282936",
        });
      }
      renderizarCarrito(); //ejecuto la funcion aca para que se ejecute cuando el producto es pusheado al carrito.
    };
  });
}
mostrarProductos();

const renderizarCarrito = () => {
  tableBody.innerHTML = ""; //para que cuando agrego un producto no me agregue devuelta el que ya habia agregado al principio y se repita.

  carrito.forEach((elemento) => {
    let divCarrito = document.createElement("tr");
    divCarrito.innerHTML = `
        <td>
        <h6 class="title">${elemento.nombre}</h6>
        <img src="${elemento.imagen}" class="productoImg" alt="">
        </td>
        <td>${elemento.cantidad * elemento.precio}</td>
        <td>
        <button><i onclick="decrementar(${elemento.id})" class="bi bi-dash-square"></i></button><span id="${elemento.id}">${elemento.cantidad}</span><button><i onclick="incrementar(${elemento.id})" class="bi bi-plus-square"></i></button>
        <button onclick="eliminarProducto(${elemento.id})" class="btnBorrar"><i class='bx bxs-trash-alt'></i></button>
        <br>
        <br>
        <p id="stockmax"></p>
        </td>`;

    tableBody.appendChild(divCarrito);

/*     let stockmax = document.getElementById("stockmax");

    if(elemento.cantidad == elemento.enStock){
      stockmax.innerHTML = "Cantidad máxima en stock."
    } */
  
  });


  numCantCarrito.innerHTML = carrito.map((item) => item.cantidad).reduce((acc, item) => acc + item,0); //igualo el numero del carrito de la navbar al length que posee el carrito entonces va agregando +1 o -1
  totalCarrito.innerHTML =
    "Total: $ " + carrito.map((producto) => producto.precio * producto.cantidad).reduce((acc, producto) => acc + producto, 0);///reduce cada elemento del array, devolviendo un unico valor. El '0' es el valor inicial.
  agregarALocalStorage(); //la ejecuto aca porque registra el ultimo valor del carrito antes de ser renderizado.
};

const eliminarProducto = (prodId) => { //recibo el id del producto a eliminar.
  const prodAEliminar = carrito.find((producto) => producto.id === prodId);//hago un find para encontrar el id del producto que sea igual al que recibo x parametro.
  const i = carrito.indexOf(prodAEliminar);//para averiguar el indice del elemento que quiero eliminar. Podria haber hecho un for tambien.
  carrito.splice(i, 1); //i= posicion del elemento que quiero eliminar del array, 1= cantidad que quiero borrar.
  renderizarCarrito(); //ejecuto aca tambien la funcion para que cada vez que se elimine un prod, se renderice el carrito actualizado otra vez.
};

let decrementar = (id) => {
  let prodCant = carrito.find((producto) => producto.id === id);
  if (prodCant.cantidad >= 2){
    prodCant.cantidad--;
    let precioTotal = carrito.map((producto) => producto.precio * producto.cantidad).reduce((acc, producto) => acc - producto,0);
    totalCarrito.innerHTML = `Precio total: $${precioTotal}`;
  }else{
    return //para que corte el proceso.
  }
  renderizarCarrito(); //vuelve a re-renderizar el carrito con el precio actualizado por eso ejecuto aca tambien la function
  agregarALocalStorage()
  actualizar(id);
}

let incrementar = (id) => {
  let prodCant = carrito.find((producto) => producto.id === id);
  if (prodCant.cantidad < prodCant.enStock){ //si la cantidad que aparece es menor a la del stock, puedo agregar mas (hasta que llegue al maximo de stock disp).
    prodCant.cantidad++;
    let precioTotal = carrito.map((producto) => producto.precio * producto.cantidad).reduce((acc, producto) => acc + producto, 0);
    totalCarrito.innerHTML = `Total: $${precioTotal}`;
  }else{
    return //corto el proceso.
  }
  renderizarCarrito(); //vuelve a re-renderizar el carrito con el precio actualizado por eso ejecuto aca tambien la function
  agregarALocalStorage()
  actualizar(id);
}

let actualizar = (id) => {
  let busqueda = carrito.find((item)=>item.id === id);
  document.getElementById(id).innerHTML = busqueda.cantidad;
  calcularNumCarritoNav()
}

let calcularNumCarritoNav = () => {
  numCantCarrito.innerHTML = carrito.map((elemento)=>elemento.cantidad).reduce((x, y) => x + y,0)
  agregarALocalStorage()
}


// ----------------------------- LOCAL STORAGE -----------------------------

function agregarALocalStorage() {
  localStorage.setItem("cart", JSON.stringify(carrito));
}


window.onload = function () {
  //window.onload para que se ejecute la funcion cuando se refresque la pagina.
  let storage = JSON.parse(localStorage.getItem("cart")); //parse para transformarlo en objeto.
  if (storage) {
    carrito = storage;
    renderizarCarrito();
  }
};