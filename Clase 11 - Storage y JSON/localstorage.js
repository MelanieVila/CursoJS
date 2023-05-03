// LOCAL STORAGE

window.addEventListener('load', function () {
    let tituloMain = document.getElementById("tituloMain");
    tituloMain.innerText = "Práctica de Almacenamiento";

    this.document.getElementById("almacenar").addEventListener('click', almacenar);
    this.document.getElementById("verInsertados").addEventListener('click', verInsertados);
    this.document.getElementById("verTodos").addEventListener('click', verTodos);
    this.document.getElementById("eliminarInsertados").addEventListener('click', eliminarInsertados);
    this.document.getElementById("eliminarTodos").addEventListener('click', eliminarTodos);
})

function almacenar() {
    localStorage.setItem("colorPreferido", "azul");
    localStorage.setItem("mascota", "perro");
    localStorage.setItem('bienvenido', '¡Hola!');
    localStorage.setItem('esVálido', true);
    localStorage.setItem('unNúmero', 20);
} // aparece en inspeccionar -> application -> local storage -> localhost

function verInsertados() {
    let color = localStorage.getItem("colorPreferido");
    document.querySelector("p").innerText = color;
} // aparece en la página web

function verTodos() {
    items="";
    for(let i=0; i<localStorage.length; i++) {
        let clave = localStorage.key(i);
        items += "Clave: " + clave + " - ";
        items += "Valor: " + localStorage.getItem(clave);
        items += "<br>\n";
    }
    document.querySelector("p").innerHTML = items;
}
/* Clave: esVálido - Valor: true
Clave: unNúmero - Valor: 20
Clave: mascota - Valor: perro
Clave: colorPreferido - Valor: azul
Clave: bienvenido - Valor: ¡Hola! */

function eliminarInsertados() {
    localStorage.removeItem("colorPreferido");
} // elimina ciertos items en inspeccionar -> application -> local storage -> localhost

function eliminarTodos() {
    localStorage.clear();
} // elimina todos los items en inspeccionar -> application -> local storage -> localhost