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

for (const producto of stock) {
    let crearDiv = document.createElement('div');
    
    crearDiv.className = 'card'

    crearDiv.style.width = '18rem'
    crearDiv.style.height = '20rem'
    crearDiv.style.textAlign = 'center'

    crearDiv.innerHTML = `<h4>${producto.nombre}</h4>
    <img src="${producto.imagen}">`
    
    document.body.append(crearDiv);
}