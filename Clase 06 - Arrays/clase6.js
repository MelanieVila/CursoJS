// Declarar arrays se realiza con corchetes:
const arrayA = [1, 2]; // con números
const arrayB = ["C1", "C2", "C3"]; // con strings
const arrayC = [true, false, false, true] // con booleanos
const arrayD = [7, "D3", true] // mixto


// Posiciones en un array, el cual comienza en índice 0:
const numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // imprime 1
console.log(numeros[3]); // imprime 4

let resultado = numeros[1] + numeros[2];
console.log(resultado); // imprime 5


// Length
const arrayMixto = ["marca", 9, "palabra"];
console.log(arrayMixto.length); // ¿cuántos elementos tiene? 3

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} // empiezo desde el cero y lo recorro completo (length)


// Push
const arrayNuevo = ["marca", 3, "palabra"];
arrayNuevo.push("auto"); // agrega un nuevo elemento
console.log(arrayNuevo.length); // imprime 4
console.log(arrayNuevo);


// Unshift
const arrayNuevo2 = ["marca", 3, "palabra"];
arrayNuevo2.unshift("auto"); // agrega un nuevo elemento AL PRINCIPIO de la lista
console.log(arrayNuevo2);


// Introducir un elemento reemplazando a otro:
const arrayNuevo3 = ["marca", 3, "palabra"];
arrayNuevo3[1] = "auto";
console.log(arrayNuevo3);


// Pop, Shift o Splice
const nombresA = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

nombresA.pop() // elimina el último elemento
console.log(nombresA); // [ 'Rita', 'Pedro', 'Miguel', 'Ana' ]

nombresA.shift() // elimina el primer elemento
console.log(nombresA); // [ 'Pedro', 'Miguel', 'Ana', 'Vanesa' ]

const nombresB = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
nombresB.splice(1, 2); // elimina la posición 1 y 2
console.log(nombresB); // [ 'Rita', 'Ana', 'Vanesa' ]


// Join -> manipula strings
const nombresC = ["Luis", "Ana", "Julia", "Juan"];

console.log(nombresC.join(", ")); // Luis, Ana, Julia
console.log(nombresC.join("*")); // Luis*Ana*Julia
console.log(nombresC.join("\n")); // separados por renglones


// Concat
const perros = ["Pupy", "Ronnie"];
const gatos = ["Mishi", "Garfield", "Zuri"];
const mascotas = perros.concat(gatos); // "suma" gatos y perros
console.log(mascotas); // [ 'Pupy', 'Ronnie', 'Mishi', 'Garfield', 'Zuri' ]


// Slice
const nombresD = ["Rita", "Pedro", "Miguel", "Pablo", "Vanesa"];
const masculinos = nombresD.slice(1, 4); // clona un array desde la posición 1 a (3-1), porque no incorpora el último
console.log(masculinos); // [ 'Pedro', 'Miguel', 'Pablo' ]


// IndexOf
const nombresE = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

console.log(nombresE.indexOf("Rita")); // está en la posición 0
console.log(nombresE.indexOf("Ana")); // está en la posición 3
console.log(nombresE.indexOf("Julieta")); // no se encuentra, por lo que es -1


// Includes
const nombresF = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

console.log(nombresF.includes("Rita")); // ¿se encuentra? true
console.log(nombresF.includes("Miguel")); // ¿se encuentra? true
console.log(nombresF.includes("Julieta")); // ¿se encuentra? false

if (nombresF.includes("Ana")) {
    console.log("Sí está");
} else {
    console.log("No está");
}; // Sí está

if (nombresF.includes("Rodrigo")) {
    console.log("Sí está");
} else {
    console.log("No está");
}; // No está


// Reverse
const nombresG = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
nombresG.reverse(); // invierte el orden de los elementos
console.log(nombresG); // [ 'Vanesa', 'Ana', 'Miguel', 'Pedro', 'Rita' ]


// Array de Objeto (almacenar objetos personalizados)
const objeto1 = { id: 1, producto: "Arroz" };
const arrayObj = [objeto1, { id: 2, producto: "Fideo" }];
arrayObj.push({ id: 3, producto: "Pan" });
console.log(arrayObj);


// For... Of (para recorrer un array)
const almacen = [
    { id: 1, producto: "Arroz" },
    { id: 2, producto: "Fideo" },
    { id: 3, producto: "Pan" }
];

for (const producto of almacen) {
    console.log(producto.id);
    console.log(producto.producto);
};