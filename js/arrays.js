let stock = [
    {
        id: 1,
        nombre: 'Zapatillas',
        precio: 12000,
        marca: 'Nike'
    },

    {
        id: 2,
        nombre: 'Remera',
        precio: 6000,
        marca: 'Adidas'
    },

    {
        id: 3,
        nombre: 'Buzo',
        precio: 10000,
        marca: 'Nike'
    },

    {
        id: 4,
        nombre: 'Campera',
        precio: 15000,
        marca: 'Jordan'
    },

    {
        id: 5,
        nombre: 'Pantalon',
        precio: 8000,
        marca: 'Jordan'
    }
];

console.log(stock);

let id = parseInt(prompt('ID:'));
let nombre = prompt('Nombre:');
let precio = parseInt(prompt('Precio:'));
let marca = prompt('Marca:')

let nuevoProducto = {id, nombre, precio, marca};

stock.push(nuevoProducto);

