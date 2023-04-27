// Tres ejemplos que apuntan a lo mismo:

let boton = document.getElementById("opcion1");
boton.addEventListener("click", respuestaClick);

let boton2 = document.getElementById("opcion02");
boton2.onclick = () => { respuestaClick('2') };

function respuestaClick(e) {
    alert("Respuesta evento " + e);
    console.log(e);
} // no es buena práctica declarar funciones y código dentro del HTML


// EVENTOS

// Mouse (ver HTML)

// Teclado
let input1 = document.getElementById("nombre");
input1.onkeyup = () => { console.log("keyUp") }; // cuando suelte una tecla me imprimirá en consola "keyUp"

let input2 = document.getElementById("edad");
input2.onkeydown = () => { console.log("keyDown") }; // cuando apriete una tecla me imprimirá en consola "keyDown"

// Change
let select = document.getElementById("eleccion");
select.onchange = () => { console.log("cambió") }; // cada vez que seleccione otra opción, aparecerá "cambió" en consola

// Input
let input1 = document.getElementById("valorIntroducido");
input1.addEventListener("input", () => {
    console.log(input1.value);
    alert(input1.value);
}); // cada vez que ingreso o quito valores en el input, aparecerá en la consola

// Submit
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
} // cuando el formulario se envíe (submit) sucederá lo que le indique