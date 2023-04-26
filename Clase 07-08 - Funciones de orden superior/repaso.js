// REPASO DE FUNCIONES

//Pasos 1 2 y 3 son funciones con diferente sintáxis (pero similares)
//Pasos 4 5 y 6 son funciones que reciben parámetros (orden superior o callbacks)
//Pasos 7 y 8 lo que no se puede hacer
//Paso 9 parámetros ocultos - tácitos


//---------- PASO 1 -----------------------------------------------------------------------------
//declaro una función "TRADICIONAL" que compare dos números a y b
function compare(a, b) { console.log(a > b) }
compare(16, 16)


//---------- PASO 2 -----------------------------------------------------------------------------
//a la función anterior le hago un return 
function compare(a, b) { return a > b }
console.log( compare(16, 16) )


//---------- PASO 3 -----------------------------------------------------------------------------
//creo mi función compare en línea
//en este caso compare es una variable que se comporta como función
let compare = (a, b) => { return a > b }
console.log( compare(17,16) )


//---------- PASO 4 -----------------------------------------------------------------------------
//vamos a crear una función ejecuta 
//esta función va a imprimir
function ejecuta (numero) { 
    console.log(numero)
}
ejecuta(1)


//---------- PASO 5 -----------------------------------------------------------------------------
//ahora a esa función le pasamos otro parámentro (una funcion)
function ejecuta (funcion, numero) { 
    funcion(numero)
}
ejecuta(console.log, 1)


//---------- PASO 6 -----------------------------------------------------------------------------
//ahora a esa función le pasamos otro parámentro (una funcion)
function ejecuta (funcion, numero) { 
    funcion(numero)
}
ejecuta(Math.sqrt, 4)
//como cambiamos la función/parametro, ya no imprime...
//tenemos dos opciones para resolverlo

//A  imprimir dentro de la función
//B  imprimir fuera, y hacer un return a la función


//---------- PASO 6 A -----------------------------------------------------------------------------
function ejecuta (funcion, numero) { 
    console.log( funcion(numero) )
}
ejecuta(Math.sqrt, 4)


//---------- PASO 6 B -----------------------------------------------------------------------------
function ejecuta (funcion, numero) { 
    return funcion(numero)
}
console.log( ejecuta(Math.sqrt, 4) )


// Lo que no se puede
//---------- PASO 7 -----------------------------------------------------------------------------
//misma función ahora para strings
//además invertimos la sintáxis interna
function ejecuta (funcion, string) { 
    return string.funcion
}
console.log( ejecuta(toUpperCase, "papa") )
//NO SE PERMITE... POR UN LADO LOS STRINGS SON TRATADOS COMO OBJETOS Y AL USAR EL "." EL CODIGO SE ROMPE
//POR OTRO LADO LAS FUNCIONES NUNCA SON PASADAS DE VERDAD, SON PARÁMETROS QUE SE CONVIERTEN DENTRO EN FUNCION
//se convierten en funciones cuando nosotros al parámetro agregamos "()" esto es "parametro()"


//Lo que no se puede
//---------- PASO 8 -----------------------------------------------------------------------------
//una función no permite la declaración multinivel
//hay que construir la función en otro lado y hacer un RE-LLAMADO
//no se permite la declaración como parámetro
function ejecuta ( funcion(a, b) ) {
    console.log(funcion)
}
//IMPORTANTE las funciones que se meten dentro de una función son anónimas, tácitas o voids
//pueden pasar parámetros tácitos, que se esconden en el llamado, esto es lo que genera dolor de cabeza
//esto es lo que se llama un ---¡¡¡CALLBACK!!!--- un llamado que se llama a sí mismo


//PASO ANÓNIMO - INVISIBLE DE PARÁMETROS - PARÁMETROS TÁCITOS
//---------- PASO 9 -----------------------------------------------------------------------------
function ejecuta (funcion) {
    console.log(funcion)
}
function compare(a, b) { return a > b }

ejecuta( compare(17, 16) )
//lo que hacemos es RE-LLAMAR LA FUNCIÓN