if (5 === 5) {
    console.log("Condición verdadera");
} else {
    console.log("Condición falsa");
} // es verdadero porque son el mismo número


if (5 === 9) {
    console.log("Condición verdadera");
} else {
    console.log("Condición falsa");
} // es falso porque no son el mismo número


if (5 === "5") {
    console.log("Condición verdadera");
} else {
    console.log("Condición falsa");
} // es falso porque no son el mismo tipo de dato


let numeroUno = 5;
let numeroDos = 5;
if (numeroUno==numeroDos) {
    console.log("Vas a ver este mensaje");
} // ¿5 es igual a 5? es verdadero, por lo que el mensaje se verá


let color = "Azul";
if (color == "Rojo") {
    console.log("El color es rojo");
} else {
    console.log("El color no es rojo");
}


let numero = 10;
let esMayor = (numero > 5);
if (esMayor) {
    console.log("Sí, es mayor");
}