let stock = [
    { 
        id: 1, 
        nombre: 'Nike AF1 White',
        marca: 'Nike',
        color: 'blanco',
        precio: 14000,
        categoria: 'zapatillas',
        cantidadDisp: 5,
        imagen: '../img/nike-af1-white.jpg'
    },
    {
        id: 2, 
        nombre: 'Nike AF1 Black',
        marca: 'Nike',
        color: 'negro',
        precio: 14000,
        categoria: 'zapatillas',
        cantidadDisp: 4,
        imagen: '../img/nike-af1-black.webp'
    },
    {
        id: 3, 
        nombre: 'Nike Dunk Panda',
        marca: 'Nike',
        color: 'blanco',
        precio: 50000,
        categoria: 'zapatillas',
        cantidadDisp: 2,
        imagen: '../img/nike-dunk-panda.jpg'
    },
    {
        id: 4, 
        nombre: 'Adidas Yeezy',
        marca: 'Adidas',
        color: 'gris',
        precio: 45000,
        categoria: 'zapatillas',
        cantidadDisp: 3,
        imagen: '../img/adidas-yeezy-gray.webp'
    },
    {
        id: 5, 
        nombre: 'Adidas Forum Low',
        marca: 'Adidas',
        color: 'Azul',
        precio: 32000,
        categoria: 'zapatillas',
        cantidadDisp: 6,
        imagen: '../img/adidas-forum-blue.webp'
    }
]

let buscarPedido = Number(prompt('Ingresa el numero de producto que deseas visualizar\n 1- Nike AF1 White\n 2- Nike AF1 Black\n 3- Nike Dunk Panda\n 4- Adidas Yeezy\n 5- Adidas Forum Low'));

const imprimirProd = () => {

    let productoSeleccionado = stock.find(((elemento) => elemento.id == buscarPedido));

    if(productoSeleccionado){
    
        let divProducto = document.createElement('div');

        divProducto.innerHTML = `<h1> El producto seleccionado es ${productoSeleccionado.nombre}</h1>
        <img src="${productoSeleccionado.imagen}">
        <h3> Marca: ${productoSeleccionado.marca}</h3>
        <h3> Color: ${productoSeleccionado.color}</h3>
        <h3> Precio: ${productoSeleccionado.precio}</h3>`

        document.body.append(divProducto);
    
    } else {
        alert('Ingresá un número válido.')
    }
}

imprimirProd();