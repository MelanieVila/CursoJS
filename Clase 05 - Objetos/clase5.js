let nombre = "Homero";
let edad = 39;
let calle = "Av. Siempreviva 742";

// Como las variables se relacionan, mejor usamos un objeto:
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

// Igual manera, más legible:
const personaI = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
}

// Imprimir en consola, hay dos maneras:
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);

console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["calle"]);

console.log(persona1) // Nos brinda toda su información

// Quisiéramos modificar un par de datos, hay dos maneras:
persona1["nombre"] = "Marge";
persona1.edad = 36;

console.log(persona1.nombre);
console.log(persona1.edad);


// MÉTODOS CONSTRUCTORES
// Se escriben comenzando con la letra mayúscula:
function Persona(nombre, edad, calle) {
    this.nombre = nombre; // esta.propiedad = recibe este valor;
    this.edad = edad;
    this.calle = calle;
}

const humano1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const humano2 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(humano1);
console.log(humano2);
console.log(persona1.calle);

// Ejemplo de práctica
function Usuario(user, password) {
    this.user = user;
    this.password = password;
}
const usuario1 = new Usuario("juanpe", "blue123");
const usuario2 = new Usuario("MariLu", "Kitty_42");
console.log(usuario1);
console.log(usuario2.password);


// JavaScript aporta sus propios objetos (inbuilt):
let cadena = "Hola Mundo";
console.log(cadena.length); // Cantidad de caracteres
console.log(cadena.toLowerCase()); // Pasar a minúscula
console.log(cadena.toUpperCase()); // Pasar a mayúscula


// Método personalizado
function Robot(apodo, planeta) {
    this.apodo = apodo;
    this.planeta = planeta;
    this.hablar = function () { console.log("Hola soy " + this.apodo) };
}
const robot1 = new Robot("Roboto", "Júpiter");
robot1.hablar();

console.log("apodo" in robot1); // devuelve TRUE porque existe
console.log("origen" in robot1); // devuelve FALSE porque no existe


// Devolver todas las propiedades del objeto con el ciclo for...in:
for (const valor in persona1) {
    console.log(persona1[valor]);
}


// RESUMEN FINAL -> Organizar todo de manera legible
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() { console.log("Hola soy " + this.nombre); }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();