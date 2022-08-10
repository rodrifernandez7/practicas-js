let carrito = [];

for (const producto of stock) {
    
    let crearDiv = document.createElement('div');
    crearDiv.style.margin = '15px';

    crearDiv.innerHTML = `<div class="card" style="width: 18rem;">
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
    divContenedor.style.justifyContent = 'center';;

    divContenedor.appendChild(crearDiv);
    
    let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);

    btnAgregarAlCarrito.addEventListener('click', () =>{
        carrito.push(producto)
        console.log(carrito);
        alert(`Agregaste ${producto.nombre} al carrito.`)
        mostrarCarrito();
    })
}

function mostrarCarrito(){
    carrito.map(elemento => {
        let otroDiv = document.createElement('div');

        otroDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${elemento.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elemento.nombre}</h5>
          <p class="card-text"> $ ${elemento.precio}</p>
        </div>
        </div>`

        document.body.appendChild(otroDiv);
    })
}