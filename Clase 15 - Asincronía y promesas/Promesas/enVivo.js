// Ejemplo

// Base de datos ficticia:
const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

// Creamos la promesa:
const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { resolve(BD) }, 3000)
    })
}

// Inicializamos con un array vacío:
let productos = []

const renderProductos = (arr) => {
    // Función que genere la vista de los productos
    console.log(arr);
}

// Asincrónicamente pedimos los datos y generamos la vista:
pedirProductos()
    .then((res) => {
        productos = res
        renderProductos(productos)
    })

/* Imprimirá:
[
    { id: 1, nombre: 'Producto 1', precio: 1500 },
    { id: 2, nombre: 'Producto 2', precio: 2500 },
    { id: 3, nombre: 'Producto 3', precio: 3500 },
    { id: 4, nombre: 'Producto 4', precio: 3500 }
]
*/