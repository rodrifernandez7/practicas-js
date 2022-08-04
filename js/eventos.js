let stock = [
    { 
        id: 1, 
        nombre: 'Nike AF1 White',
        marca: 'Nike',
        color: 'blanco',
        precio: 22000,
        categoria: 'zapatillas',
        cantidadDisp: 5,
        imagen: '../img/nike-af1-white.jpg',
        tallesDisp: [9,10,11,12]
    },
    {
        id: 2, 
        nombre: 'Nike AF1 Black',
        marca: 'Nike',
        color: 'negro',
        precio: 22000,
        categoria: 'zapatillas',
        cantidadDisp: 4,
        imagen: '../img/nike-af1-black.webp',
        tallesDisp: [9,10,11,12]
    },
    {
        id: 3, 
        nombre: 'Nike Dunk Panda',
        marca: 'Nike',
        color: 'blanco',
        precio: 68000,
        categoria: 'zapatillas',
        cantidadDisp: 2,
        imagen: '../img/nike-dunk-panda.jpg',
        tallesDisp: [9,9.5]
    },
    {
        id: 4, 
        nombre: 'Adidas Yeezy',
        marca: 'Adidas',
        color: 'gris',
        precio: 72000,
        categoria: 'zapatillas',
        cantidadDisp: 3,
        imagen: '../img/adidas-yeezy-gray.webp',
        tallesDisp: [11,12]
    },
    {
        id: 5, 
        nombre: 'Adidas Forum Low',
        marca: 'Adidas',
        color: 'Azul',
        precio: 26000,
        categoria: 'zapatillas',
        cantidadDisp: 6,
        imagen: '../img/adidas-forum-blue.webp',
        tallesDisp: [8.5,9,10]
    }
]

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
      <a href="#" id="button${producto.id}" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>`

    let divContenedor = document.querySelector('.contenedor');
    divContenedor.style.display = 'flex';
    divContenedor.style.justifyContent = 'center';
    divContenedor.style.marginTop = '50px';

    divContenedor.append(crearDiv);
    
    let carrito = [];

    let btnAgregarAlCarrito = document.getElementById(`button${producto.id}`);

    btnAgregarAlCarrito.addEventListener('click', () =>{
        carrito.push(producto)
        console.log(carrito);
        alert(`Agregaste ${producto.nombre} al carrito.`)
    })

}









// ---------------- COMENTARIOS EXTRAS CODIGO A PROBAR/CORREGIR ----------------    

/* let acumulador = [];

let incrementar = () =>{
    stock.forEach(element => {
        
    });

    console.log('Estás incrementando');
}

let decrementar = () =>{
    console.log('Estás decrementando.');
} */


/* let incrementar = () =>{
    let btnIncrementar = document.getElementById('btnIncrementar');
    btnIncrementar.addEventListener('click', () =>{
        console.log('Estas agregando.');
})
}

let decrementar = () =>{
    let btnDecrementar = document.getElementById('btnDecrementar');
    btnDecrementar.addEventListener('click', () =>{
        console.log('Estás decrementando.');
})
}

incrementar();
decrementar(); */


{/* <p>Talles disponibles:</p>
<select id="lista"> 
<option value="9">${producto.tallesDisp}</option>
</select> */}