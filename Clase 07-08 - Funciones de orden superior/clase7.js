// RETORNAR FUNCIONES
function mayorQue(n) { return (m) => m > n }; // "mayorQue" necesita un número base (n), y luego recibirá un número (m)
let mayorQueDiez = mayorQue(10); // esto se traduce en: let m = n(10);
console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8)); // false
// Como ya tenemos definido que "n" es 10, el parámetro que le pasemos en el console.log va a ser automáticamente "m".

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}
let sumar = asignarOperacion("sumar");
let restar = asignarOperacion("restar");

console.log(sumar(4, 6)) // 10
console.log(restar(5, 3)) // 2
console.log(sumar(6, 8)) // 14
console.log(restar(98, 25)) // 73



let total = 0;
const arrayNumeros = [1, 2, 3, 4];
function porCadaUno(array, funcion) {
    for (const elemento of array) {
        funcion(elemento);
    }
}
porCadaUno(arrayNumeros, console.log); // 1, 2, 3, 4

const duplicado = [];
porCadaUno(arrayNumeros, (el) => {
    duplicado.push(el * 2)
})
console.log(duplicado); // [2, 4, 6, 8]



// MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN
const numeros = [5, 2, 13, 45, 24, 38];
const animales = ["Gato", "Pez", "Elefante", "Jirafa"];
const productos = [
    { nombre: "Mesa", precio: 3500 },
    { nombre: "Silla de plástico", precio: 2000 },
    { nombre: "Silla de madera", precio: 2500 },
    { nombre: "Ventana", precio: 4500 },
    { nombre: "Puerta", precio: 3000 }
] // las declaramos para reutilizar a continuación


// forEach() => recorrer el array y ejecutar lo que le digamos con cada elemento
numeros.forEach( (num) => {
    console.log(num);
}) // [5, 2, 13, 45, 24, 38]

productos.forEach( (producto) => {
    console.log(producto);
})

productos.forEach( (producto) => {
    console.log(producto.precio);
})


// find => recorrer el array y retornar el primer elemento que cumpla la condición
const pez = animales.find((animal) => animal === "Pez");
console.log(pez); // Pez (true)

const televisor = productos.find((producto) => producto === "Televisor");
console.log(televisor); // undefined (false)

let productoElegido = prompt("Ingrese el producto que quiere comprar");
console.log(productos.find((producto) => producto.nombre === productoElegido)); // con este ejemplo, el usuario puede buscar qué productos hay en la tienda, desde el buscador


// filter() => recorrer el array y retonar uno nuevo con todos los elementos que cumplan con una condición
const gato = animales.filter((animal) => animal === "Gato");
console.log(gato); // [ 'Gato' ]

const sillas = productos.filter((producto) => producto === "Silla");
console.log(sillas); // []

const sillas = productos.filter((producto) => producto.nombre.includes("Silla"));
console.log(sillas); // [ { nombre: 'Silla de plástico', precio: 2000 }, { nombre: 'Silla de madera', precio: 2500 } ]


// some() => recorrer el array y responder true o false
const jirafa = animales.some((animal) => animal === "Jirafa");
console.log(jirafa); // true

const caballo = animales.some((animal) => animal === "Caballo");
console.log(caballo); // false


// map() => recorrer el array y retornar uno nuevo con los elementos transformados del array original (esto modifica el array original, tener cuidado)
const nombres = productos.map((producto) => producto.nombre);
console.log(nombres); // [ 'Mesa', 'Silla de plástico', 'Silla de madera', 'Ventana', 'Puerta' ]

const preciosActualizados = productos.map((producto) => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.25
    }
})
console.log(productos); // precios anteriores, por ejemplo: { nombre: 'Mesa', precio: 3500 }
console.log(preciosActualizados); // precios actualizados, por ejemplo: { nombre: 'Mesa', precio: 4375 }


// reduce() => recorrer el array y retornar un único valor luego de una operación
const sumaArray = numeros.reduce((acumulador, numero) => acumulador + numero, 0); // el 0 es donde quiero que inicie la suma
console.log(sumaArray); // 127

const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalCarrito); // 15500


// sort() => reordenar el array según el criterio que le indiquemos (es un método destructivo/modificador, cuidado!)
numeros.sort((a, b) => a - b);
console.log(numeros); // [ 2, 5, 13, 24, 38, 45 ] ordenados de menor a mayor

numeros.sort((a, b) => a + b);
console.log(numeros); // [ 45, 38, 24, 13, 5, 2 ] ordenados de mayor a menor



// OBJETO MATH
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

const pi = Math.PI; 

// Math.min() y Math.max() => retonar el número mínimo o máximo
console.log(Math.min(5, 2, 13, 45, 24, 38)); // 2
console.log(Math.max(5, 2, 13, 45, 24, 38)); // 45

// ceil() => retonar el número entero redondeado hacia arriba
console.log(Math.ceil(pi)); // 4

// floor() => retornar el número entero redondeando hacia abajo
console.log(Math.floor(pi)); // 3

// round() => retornar el número redondeado al entero más cercano
console.log(Math.round(pi)); // 3

// sqrt() => retornar la raíz cuadrada de un número, si se envía un número negativo retorna NaN
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(-1)); // NaN

// random() => retornar un número aleatorio entre 0 y 1 (inclusive)
console.log(Math.random());
console.log(Math.random() * 50); // entre 0 y 50 (con decimales)
console.log(Math.round(Math.random() * 50)); // entre 0 y 50 (sin decimales)
console.log(Math.round(Math.random() * 50 + 20)); // números entre 20 y 70 (70 es por la suma y el mínimo es el número de la derecha)


// CLASE DATE
console.log(new Date()); // fecha y hora actual

// los meses se cuentan 0=enero a 11=diciembre
console.log(new Date(2020, 1, 15)); // 15 febrero 2020

const casiNavidad = new Date(2021, 11, 23, 23, 59, 59);
console.log(casiNavidad);

const casiNavidad2 = new Date("December 23, 2021 23:59:59");
console.log(casiNavidad2);

const hoy = new Date("December 17, 2021");
console.log(hoy.toDateString()); // Fri Dec 17 2021
console.log(hoy.toLocaleString()); // 17/12/2021, 00:00:00
console.log(hoy.toLocaleDateString()); // 17/12/2021
console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)

console.log(hoy.getFullYear()); // 2021
console.log(hoy.getMonth()); // 11 (diciembre)
console.log(hoy.getDay()); // 5 (viernes)


const inicio = new Date();
for (let i = 0; i < 1000; i++) {
    console.log("Haciendo tiempo");
}
const final = new Date();
console.log("El proceso tardó: " + (final - inicio) + " milisegundos"); // el proceso tardó: "tantos" milisegundos