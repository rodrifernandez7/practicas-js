const mostrarProductos = () => {
    stock.forEach((producto) => {

        let crearDiv = document.createElement('div');

        crearDiv.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text"> $ ${producto.precio}</p>
          <div class="botonesCantidad">
            <i id="btnIncrementar" class="bi bi-plus-lg"></i>
                <div id="${producto.id}" class="cantidad"> 0 </div>
            <i id="btnDecrementar" class="bi bi-dash-lg"></i>
          </div>
          <br>
          <a href="#" id="button${producto.id}" class="btn btn-primary">Añadir al carrito</a>
        </div>
        </div>`

        let divContenedor = document.querySelector('.contenedor');
        divContenedor.style.display = 'flex';
        divContenedor.style.justifyContent = 'center';

        divContenedor.appendChild(crearDiv);

        let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);
    
        btnAgregarAlCarrito.addEventListener('click', agregarProdAlCarrito);

    })
}
mostrarProductos();

let carrito = [];

function agregarProdAlCarrito(elemento){
    let btn = elemento.target;
    let item = btn.closest('.card'); //obtener el contendor que tenga la clase mas cercana 'card'.
    let itemTitle = item.querySelector('.card-title').textContent; //para obtener el contenido de ese selector sin todo el html molestando.
    let itemPrice = item.querySelector('.card-text').textContent;
    let itemImg = item.querySelector('.card-img-top').src; //para que se encuentre dendtro de src (devuelve link de imagen) sin el html molestando.

    let nuevoItem = {
        title: itemTitle,
        price: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    pushItemAlCarrito(nuevoItem);
}

function pushItemAlCarrito(nuevoItem){
    //para que me sume otro a la cantidad en vez de agregarme el mismo otra vez.
    for (let index = 0; index < carrito.length; index++) {
        console.log(carrito[i].title);
    }

    carrito.push(nuevoItem);
    // alert(`Agregaste ${nuevoItem.title} al carrito.`)
    console.log(carrito);
    renderizarCarrito();
}

let tableBody = document.getElementById('tableBody');

function renderizarCarrito() {
    tableBody.innerHTML = '';//cada vez que se ejecute esta accion ESTE VACIO. Para que no me agregue devuelta lo que ya habia agregado.
    carrito.map(elemento => {
        let divCarrito = document.createElement('tr'); //me fijo desde el bootstap como esta armado para agregarlo.
        divCarrito.innerHTML = `<th scope="row">1</th>
            <td>${elemento.title}</td>
            <td>${elemento.price}</td>
            <td>
              <input type="number" min="1" value=${elemento.cantidad}>
              <i class="bi bi-trash"></i>
            </td>`

       tableBody.appendChild(divCarrito);
    })
}