// SESSION STORAGE

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
    sessionStorage.setItem("colorPreferido", "azul");
    sessionStorage.setItem("mascota", "perro");
    sessionStorage.setItem('bienvenido', '¡Hola!');
    sessionStorage.setItem('esVálido', true);
    sessionStorage.setItem('unNúmero', 20);
} // aparece en inspeccionar -> application -> session storage -> sessionhost

function verInsertados() {
    let color = sessionStorage.getItem("colorPreferido");
    document.querySelector("p").innerText = color;
} // aparece en la página web

function verTodos() {
    items="";
    for(let i=0; i<sessionStorage.length; i++) {
        let clave = sessionStorage.key(i);
        items += "Clave: " + clave + " - ";
        items += "Valor: " + sessionStorage.getItem(clave);
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
    sessionStorage.removeItem("colorPreferido");
} // elimina items en inspeccionar -> application -> session storage -> sessionhost

function eliminarTodos() {
    sessionStorage.clear();
} // elimina todos los items en inspeccionar -> application -> session storage -> localhost