/*
function nombre(parámetros) {código}
*/


function saludar() {
    console.log("¡Hola! Soy tu primera función.");
}
// Ahora la llamamos...
saludar();


/*
Es lo mismo que crear un ciclo:
    for(let i=0; i<4; i++) { saludar () }

Pero la función la podemos reutilizar.
*/


// Creamos un parámetro
function mostrar(mensaje) {
    console.log(mensaje);
}
mostrar("Soy un mensaje feliz :-)");


// Practicamos parámetros
function personaje(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}
personaje("Pepe", "Grillo");

function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}
sumar(4, 5);


// Return
function sumando(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumando(5, 8);
console.log(resultado);


// Escribir una función llamada crearUsuario
function crearUsuario(nombreUsuario) {
    console.log(nombreUsuario);
}
crearUsuario("Cosme Fulanito");


// Escribir una función que devuelva -1 si no es múltiplo de 4
function matematica(multiplo) {
    if (multiplo % 4 == 0) {
        return "Es múltiplo de 4"
    } else {
        return -1;
    }
}
console.log(matematica(16));
console.log(matematica(23));
console.log(matematica(32));


// Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }

console.log(suma(15, 20));
console.log(resta(15, 5));