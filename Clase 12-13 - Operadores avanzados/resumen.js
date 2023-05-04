// RESUMEN


//*******************************************************************************************************
//                                  OPERADORES AVANZADOS                                  
//*******************************************************************************************************

// Operador ++
num++; // significa: num += 1;

// Operador ternario
temperatura > 30 ? alert("Día caluroso") : alert("Día agradable"); // condición ? caso1 : caso2

// Operador lógico AND (&&)
carrito.length === 0 && console.log("¡El carrito está vacío!");

// Operador lógico OR (||)
console.log(usuario1 || "El usuario no existe");

// Operador Nullish Coalescing (??)
console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe");


//*******************************************************************************************************
//                                  DESESTRUCTURACIÓN DE OBJETOS                                  
//*******************************************************************************************************

const { nombre, edad } = usuario;
const { nommbre, telefono: {trabajo} } = usuario;


//*******************************************************************************************************
//                                  DESESTRUCTURACIÓN DE ARRAYS                                  
//*******************************************************************************************************

const [,, a, b] = nombres; // omito las dos primeras posiciones