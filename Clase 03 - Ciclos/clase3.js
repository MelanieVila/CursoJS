for (let i = 0; i < 10; i++) { console.log("Hola"); } // esto hará que haya 10 Hola en la terminal

for (let i = 0; i < 10; i++) { console.log(i); } // se verá del 0 al 9

for (let i = 0; i <= 10; i++) { console.log(i); } // se verá del 0 al 10

for (let i = 0; i <= 10; i+=2) { console.log(i); } // se verá del 0 al 10, sumando de 2 en 2

//

for(ignacioCuenta = 1; ignacioCuenta <= 25; ignacioCuenta++){
    console.log(ignacioCuenta);
} // juego Escondidas


// TABLAS DE MULTIPLICAR
// Solicitamos un valor al usuario
let ingresarNumero = 5;
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <=10; i++) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}