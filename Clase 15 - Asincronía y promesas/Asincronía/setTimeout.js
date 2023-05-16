// SET TIMEOUT

// Set timeout es una forma de programar asincrónica, significa que se ejecutará luego

// setTimeout(acción, tiempo-en-milisegundos):
setTimeout(()=> { console.log("Proceso asincrónico")}, 3000); // setTimeout(acción, tiempo-en-milisegundos)



console.log("Inicia proceso");
console.log("Mitad de proceso");
console.log("Fin proceso");
setTimeout(()=> { console.log("Inicia proceso")}, 1000);
setTimeout(()=> { console.log("Mitad de proceso")}, 2500);
setTimeout(()=> { console.log("Fin proceso")}, 5000);



for (let letra of "hola") {
    setTimeout(() => { console.log(letra) }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => { console.log(letra) }, 3000)
}



// Aún vacío la asincronía se rompe igual:
console.log("Inicia proceso");
setTimeout(()=> { console.log("Mitad de proceso")}, 0);
console.log("Fin proceso");
// Inicia proceso, Fin proceso, Mitad de proceso