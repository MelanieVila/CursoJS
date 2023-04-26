let div = document.getElementById("app");
let parrafo = document.getElementById("textoMundo");
console.log(div);
console.log(parrafo);


let paises = document.getElementsByClassName("paises");
console.log(paises);
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
// se retornará un array de elementos


let contenedores = document.getElementsByTagName("div"); // me traerá todos los divs
console.log(contenedores);


//let paises = document.getElementsByClassName("paises");
//let contenedores = document.getElementsByTagName("div");
for (const pais of paises) {
    console.log(pais.innerHTML);
}
for (const div of contenedores) {
    console.log(div.innerHTML);
}


let titulo = document.getElementById("tituloMundo");
console.log(titulo.innerText); // "Hola Mundo!"
// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"
console.log(titulo.innerText); // "Hola Coder!"


let container = document.getElementById("cuadroTexto");
// cambio el código HTML interno, le agrego cosas al div
container.innerHTML = "<h2>Hola Mundo!</h2><p>Lorem ipsum</p>"


function crear() {
    // crear nodo de tipo elemento, etiqueta p
    let parrafo = document.createElement("p");
    // insertar HTML interno
    parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
    // añadir el nodo element como hijo de body
    document.body.append(parrafo);
}

function eliminar1() {
    let parrafo = document.getElementsByTagName("p");
    // esto no funciona
    parrafo.remove();
    // la sintaxis no permite eliminar "la colección", sino los items dentro de ella
}

function eliminar2() {
    let parrafo = document.getElementsByTagName("p");
    // esto sí
    parrafo[0].remove();
    // presenta un bug... da error si no hay elementos
}

function eliminar3() {
    let parrafo = document.getElementsByTagName("p");
    if (parrafo.length >= 1) { parrafo[0].remove(); }
    else { alert("No hay elementos que eliminar") };
}


function dar() {
    document.getElementById("nombre").value = "HOMERO";
    document.getElementById("edad").value = 39;
}
function obtener() {
    console.log(document.getElementById("nombre").value);
    console.log(document.getElementById("edad").value);
}



const productos = [ { id: 1, nombre: "Arroz", precio: 125 },
{ id: 2, nombre: "Fideo", precio: 70 },
{ id: 3, nombre: "Pan", precio: 50 },
{ id: 4, nombre: "Flan", precio: 100 } ];

for (const producto of productos) {
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
                        <p>Producto: ${producto.nombre}</p>
                        <b>$ ${producto.precio}</b>`;
document.body.appendChild(contenedor);
}