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

  function ordernarAlfabeticamente(x, y) {  //funcion para que aparezcan los productos ordenados alfabeticamente.
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

    let divContenedor = document.querySelector(".contenedor");

    divContenedor.appendChild(crearDiv);

    let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);

    btnAgregarAlCarrito.addEventListener("click", () =>
      agregarAlCarrito(producto.id)
    );

    btnAgregarAlCarrito.onclick = () => {
      Swal.fire({
        text: `${producto.nombre} añadido al carrito.`,
        imageUrl: `${producto.imagen}`,
        imageWidth: 284,
        imageHeight: 284,
        imageAlt: "Product Image",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#282936",
      });
    };

    const agregarAlCarrito = (prodId) => {
      let productoExistente = carrito.some((prod) => prod.id === prodId);

      if (productoExistente) {
        const productos = carrito.map((producto) => {
          if (producto.id === prodId) {
            producto.cantidad++;
          }
        });
      } else {
        const item = data.find((prod) => prod.id === prodId);
        carrito.push(item);
      }
      renderizarCarrito();
    };
  });
}
mostrarProductos();

const renderizarCarrito = () => {
  tableBody.innerHTML = "";

  carrito.forEach((elemento) => {
    let divCarrito = document.createElement("tr");
    divCarrito.innerHTML = `
        <td>
        <h6 class="title">${elemento.nombre}</h6>
        <img src="${elemento.imagen}" class="productoImg" alt="">
        </td>
        <td>${elemento.precio}</td>
        <td>
        <button><i class="bi bi-dash-square"></i></button>${elemento.cantidad}<button><i class="bi bi-plus-square"></i></button>
            <button onclick="eliminarProducto(${elemento.id})" class="btnBorrar"><i class='bx bxs-trash-alt'></i></button>
        </td>`;

    tableBody.appendChild(divCarrito);
  });
  numCantCarrito.innerHTML = carrito.length;
  totalCarrito.innerText =
    "Total: $ " + carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
  agregarALocalStorage();
};

const eliminarProducto = (prodId) => {
  const item = carrito.find((producto) => producto.id === prodId);
  const i = carrito.indexOf(item);
  carrito.splice(i, 1);
  renderizarCarrito();
};

// ----------------------------- LOCAL STORAGE -----------------------------

function agregarALocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = function () {
  //window.onload para que se ejecute la funcion cuando se refresque la pagina.
  let storage = JSON.parse(localStorage.getItem("carrito")); //parse para transformarlo en objeto.
  if (storage) {
    carrito = storage;
    renderizarCarrito();
  }
};
