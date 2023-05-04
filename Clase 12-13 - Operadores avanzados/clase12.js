// OPERADORES AVANZADOS

// Operador ++
let num = 10;
num = num + 1; // aumentar en 1 el valor
num += 1; // primera simplificación
num++; // finalmente



// Operador ternario => simplifica if...else
let temperatura = 31;

if (temperatura > 30) {
    alert("Día caluroso")
} else {
    alert("Día agradable")
}

temperatura > 30 ? alert("Día caluroso") : alert("Día agradable"); //condición ? caso1 : caso2



// Operador lógico AND (&&)
const carrito = [];

if (carrito.length === 0) {
    console.log("¡El carrito está vacío!");
}

carrito.length === 0 && console.log("¡El carrito está vacío!"); // con operador AND


const usuario = { nombre: "John Doe", edad: 14 }
const registroIngreso = usuario.edad >= 18 && new Date();
console.log(registroIngreso); // false



// Operador lógico OR (||)
console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola Mundo" || "Falsy"); // Hola Mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy"); // Falsy
console.log("Falsy" || 40); // Falsy
console.log(35 || 40); // Falsy
// analiza números, cadenas de texto (no considera: 0, null, undefined, NaN, false o string vacío)
// si el primer dato es verdadero, toma ese. sino, el segundo.


const usuario1 = { nombre: "John Doe", edad: 14 }
const usuario2 = null;

console.log(usuario1 || "El usuario no existe"); // { nombre: 'John Doe', edad: 14 }

console.log(usuario2 || "El usuario no existe"); // El usuario no existe


let carrito;
let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));

if (carritoLocalStorage) {
    carrito = carritoLocalStorage
} else {
    carrito = []
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || []



// Operador Nullish Coalescing (??)
console.log(0 ?? "Nullish"); // 0
console.log(40 ?? "Nullish"); // 40
console.log(null ?? "Nullish"); // Nullish
console.log(undefined ?? "Nullish"); // Nullish
console.log("Hola Mundo" ?? "Nullish"); // Hola Mundo
console.log("" ?? "Nullish"); // ""
console.log(NaN ?? "Nullish"); // NaN
console.log(true ?? "Nullish"); // true
console.log(false ?? "Nullish"); // false
// solamente aparece Nullish en null y undefined


const usuario = null;
console.log(usuario.nombre || "El usuario no existe" ); // Error: "No se pueden leer propiedades de null"
console.log(usuario?.nombre || "El usuario no existe"); // "El usuario no existe"


const usuario = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
        javascript: "aprobado"
    }
}

console.log(usuario?.cursos?.javascript || "La propiedad no existe"); // "aprobado"
console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe"); // "La propiedad no existe"



// DESESTRUCTURACIÓN DE OBJETOS => desarmar objetos
const usuario = { nombre: "John Doe", edad: 32 }
const { nombre, edad } = usuario;

console.log(nombre); // "John Doe"
console.log(edad); // 32

const { telefono } = usuario; // undefined


const usuario = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        celular: 113334444,
        casa: null,
        trabajo: 113325555
    }
}
const { nombre, telefono: {trabajo} } = usuario;
console.log(nombre); // "John Doe"
console.log(trabajo); // 113325555


const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
} = item

console.log(id); // 432
console.log(nombre); // "Some product"
console.log(precio); // 5600


const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

const desestructurar = (item) => {
    const {id, nombre} = item
    console.log(id, nombre);
} // desestructurar dentro del bloque
desestructurar(producto); // 10 Curso Javascript


const desestructurar = ( {id, nombre} ) => {
    console.log(id, nombre);
} // desestructurar lo que reciba por parámetro
desestructurar(producto); // 10 Curso Javascript


window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
})



// DESESTRUCTURACIÓN DE ARRAYS
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [a, b] = nombres;

console.log(a); // "Juan"
console.log(b); // "Julieta"

const [,, a, b] = nombres; // omito las dos primeras posiciones

console.log(a); // "Carlos"
console.log(b); // "Mariela"