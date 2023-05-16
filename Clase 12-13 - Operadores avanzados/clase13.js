// SPREAD DE ARRAYS

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
console.log(nombres);
// spread ... del array:
console.log(...nombres); // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlos", "Mariela");



const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(numeros) ) // NaN

console.log( Math.max(...numeros) ) // 92



const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

const nombresTodos = [...nombres1, ...nombres2]

console.log(nombresTodos); // [ 'Juan', 'Julieta', 'Carlos', 'Mariela' ]

// spread del array un un objeto:
const nombresObj = { ...nombres }

console.log(nombresObj); // { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }



// SPREAD DE OBJETOS

const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = { ...usuario1 }
console.log(usuario2); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}
console.log(usuario3); // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }



// SPREAD COMO REST

function sumar(...numeros) {
    console.log(numeros);
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]


function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450