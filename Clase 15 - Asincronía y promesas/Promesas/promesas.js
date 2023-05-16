// PROMESAS

// new Promise( );

// new Promise((resolve, reject) => { cuerpo de la promesa });


// Etapa 1: espera
const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
    })
}
console.log(eventoFuturo()); // Promise { <pending> }


// Etapa 2: resolución

const eventoTarde = (res) => {
    return new Promise((resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}
console.log(eventoTarde(true)); // Promise { 'Promesa resuelta' }
console.log(eventoTarde(false)); // Promise { <rejected> 'Promesa rechazada' }



// Mezclado con setTimeout:
const eventoLuego = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}
console.log(eventoLuego(true)); // Promise { <pending> }
console.log(eventoLuego(false)); // Promise { <pending> }



// Then and Catch
// Then cuando el resultado es exitoso
// Catch cuando es un error
const eventoPosterior = (res) => {
    return new Promise((resolve, reject) => {
        res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
    })
}

eventoPosterior(true)
    .then((response) => {
        console.log(response); // Promesa resuelta
    })

eventoPosterior(false)
    .catch((error) => {
        console.log(error); // Promesa rechazada
    })



// En la realidad las promesas siempre se preparan para usar uno de los dos y no solo uno
const eventoProximo = (res) => {
    return new Promise((resolve, reject) => {
        res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
    })
}

eventoProximo(true)
    .then((response) => {
        console.log(response) // Promesa resuelta
    })
    .catch((error) => {
        console.log(error)
    })

eventoProximo(false)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error) // Promesa rechazada
    })



// Finally
const eventoSiguiente = (res) => {
    return new Promise((resolve, reject) => {
        res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
    })
}
eventoSiguiente(true)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Fin del proceso")
    }) // Promesa resuelta, Fin del proceso