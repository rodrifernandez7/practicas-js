let producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
let total = 0;
let cantidad;

while (producto != NaN) {
    switch (producto) {
        case 1:
            zapatillas();
            break;
        
        case 2: 
            remeras();
            break;
        
        case 3: 
            buzos();
            break;
           
        case 4:
            camperas();
            break;
            
        case 5:
            pantalones(); 
            break;
        
        default:
            alert('Ingresá un numero correcto.');
            producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));    
    }
}


// <--------------------- FUNCIONES --------------------->
function zapatillas() {

    cantidad = parseInt(prompt('El precio de las zapatillas es de $12.000 ¿Cuántas zapatillas querés?'));

    if (cantidad > 0 && cantidad <= 5) {
        total = 12000 * cantidad;
        alert(' El precio total sin IVA es de ' + '$' + total);
        continuarCompra();
    } else {
        alert('Ingresa un numero valido. Solamente podes agregar hasta 5 unidades del producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
    }
}

function remeras() {

    cantidad = parseInt(prompt('El precio de las remeras es de $6.000 ¿Cuántas remeras querés?'));

    if (cantidad > 0 && cantidad <= 5) {
        total = 6000 * cantidad;
        alert(' El precio total sin IVA es de ' + '$' + total);
        continuarCompra();
    } else {
        alert('Ingresa un numero valido. Solamente podes agregar hasta 5 unidades del producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
    }
}

function buzos() {

    cantidad = parseInt(prompt('El precio de los buzos es de $10.000 ¿Cuántos buzos querés?'));

    if (cantidad > 0 && cantidad <= 5) {
        total = 10000 * cantidad;
        alert(' El precio total sin IVA es de ' + '$' + total);
        continuarCompra();
    } else {
        alert('Ingresa un numero valido. Solamente podes agregar hasta 5 unidades del producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
    }
}

function camperas() {

    cantidad = parseInt(prompt('El precio de las camperas es de $15.000 ¿Cuántas camperas querés?'));

    if (cantidad > 0 && cantidad <= 5) {
        total = 15000 * cantidad;
        alert(' El precio total sin IVA es de ' + '$' + total);
        continuarCompra();
    } else {
        alert('Ingresa un numero valido. Solamente podes agregar hasta 5 unidades del producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
    }
}

function pantalones() {

    cantidad = parseInt(prompt('El precio de los pantalones es de $8.000 ¿Cuántos pantalones querés?'));

    if (cantidad > 0 && cantidad <= 5) {
        total = 8000 * cantidad;
        alert(' El precio total sin IVA es de ' + '$' + total);
        continuarCompra();
    } else {
        alert('Ingresa un numero valido. Solamente podes agregar hasta 5 unidades del producto.')
        producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
    }
}


function continuarCompra(){

    let continuar = prompt('¿Desea continuar con la compra? Responda ¨Si¨ o ¨No¨')

    if (continuar == 'si' || continuar == 'Si' || continuar == 'SI') {

        sumarIva()

    } else {
        alert('Su sesion ha finalizado');
    }

    producto = parseInt(prompt('¿Qué producto deseas? Seleccioná el número.\n\n 1- Zapatillas\n 2- Remeras\n 3- Buzos\n 4- Camperas\n 5- Pantalones'));
}

function sumarIva() {
    let finalizar = prompt(' El precio total incluído IVA es de ' + '$' + (total * 1.105) + '\n Desea confirmar la compra? Responda "Si" o "No"');
    if (finalizar == 'si' || finalizar == 'Si' || finalizar == 'SI') {
        alert('Muchas gracias por su compra.')
    } else {
        alert('Su sesion ha finalizado.')
    }
}