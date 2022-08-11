const mostrarProductos = () => {
    stock.forEach((producto) => {

        let crearDiv = document.createElement('div');

        crearDiv.innerHTML += `<div class="card">
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
          <button href="#" id="button${producto.id}" class="btnAddCarrito">Añadir al carrito</button>
        </div>
        </div>`

        let divContenedor = document.querySelector('.contenedor');
        divContenedor.style.display = 'flex';
        divContenedor.style.justifyContent = 'center';

        divContenedor.appendChild(crearDiv);

        let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);
    
        btnAgregarAlCarrito.addEventListener('click', capturarProducto);

    })
}
mostrarProductos();

let carrito = [];

function capturarProducto(event){
    let btn = event.target;
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

    let alert = document.querySelector('.alert');//capturo el alert que traje de BS.
    
    alert.classList.remove('esconder');//le quito la clase que le cree.
    setTimeout(() =>{                  
        alert.classList.add('esconder');//establezo que pasado los 2 segundos se le vuelva a agregar
    }, 3000)                            //2000 equivale a 2 segundos.
    

    let inputCantidad = tableBody.getElementsByClassName('inputCantidad');

    //para que me sume otro a la cantidad en vez de agregarme el mismo otra vez.
    for (let i = 0; i < carrito.length; i++) { //recorro el carrito.
        if (carrito[i].title.trim() === nuevoItem.title.trim()){ //.trim() para que quite todos los espacios que esten a los lados y no me de false por un espacio. Si esto se cumple significa que ya esta agregado nuestro producto porque titlte es nuestro identificador.
            carrito[i].cantidad++;
            inputCantidad[i].value++ //con [i] indico la posicion donde nos encontramos ya que todos los prod agregados tienen el input de cantidad.
            precioTotal();
            return null; //para q no se ejecute carrito.push ni el renderizado. Va a salir de la function pricipal pushItemAlCarrito.
        }                //hace que no me agregue devuelta el producto que elegi.
    }

    carrito.push(nuevoItem);

    renderizarCarrito();
}

let tableBody = document.getElementById('tableBody');

function renderizarCarrito() {
    tableBody.innerHTML = '';//cada vez que se ejecute esta accion ESTE VACIO. Para que no me agregue devuelta lo que ya habia agregado.
    carrito.map(elemento => {
        let divCarrito = document.createElement('tr'); //me fijo desde el bootstap como esta armado para agregarlo.
        divCarrito.classList.add('itemCarritoContainer');
        divCarrito.innerHTML = `<th scope="row">1</th>
            <td>
            <h6 class="title">${elemento.title}</h6>
            <img src="${elemento.img}" class="productoImg" alt="">
            </td>
            <td>${elemento.price}</td>
            <td>
              <input type="number" min="1" value=${elemento.cantidad} class="inputCantidad">
              <button class="btnBorrar"><i class="bi bi-trash"></i></button>
            </td>`

        tableBody.appendChild(divCarrito);

        divCarrito.querySelector('.btnBorrar').addEventListener('click', eliminarProducto);
    })
    precioTotal();
}

function precioTotal(){
    let total = 0;
    let totalCarrito = document.getElementById('totalCarrito');

    carrito.forEach(item => {
        let precio = Number(item.price.replace("$", ''));//porque el precio tiene el signo de pesos y lo transformo en un valor numerico.
        total = total + precio*item.cantidad;
    })

    totalCarrito.innerHTML = `Total: $${total}`
    agregarALocalStorage();//la ejecuto aca porque registra el ultimo valor del carrito antes de ser renderizado.
}

function eliminarProducto(event){
    let btnBorrar = event.target;
    let tr = btnBorrar.closest(".itemCarritoContainer");//tr es el cont padre y antes le habia asinado la clase itemCarritoContainer
    let identificador = tr.querySelector('.title').textContent;//mi identificador es el title entonces busco donde este la clase title y capturo su contenido para luego compararlo en el IF.

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title == identificador) {
            carrito.splice(i, 1);// i es la posicion que quiero eliminar, y el 1 que quiero eliminar uno solo.
        }
        
    }
    tr.remove();
    precioTotal(); //despues que se ejecuta el remove, que se ejecute la sumatoria del total otra vez (sino me eliminaba el prod pero el total anterior seguia estando).
}

// ----------------------- SESSION STORAGE -----------------------

function agregarALocalStorage(){
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function () { //window.onload para que se ejecute la funcion cuando se refresque la pagina.
    let storage = JSON.parse(sessionStorage.getItem('carrito'));//parse para transformarlo en objeto.
    if (storage) {
        carrito = storage;
        renderizarCarrito();
    }
}