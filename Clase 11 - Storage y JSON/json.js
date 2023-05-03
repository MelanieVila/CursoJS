// JSON

// Stringify => transformar objeto JavaScript en string en formato JSON:
const producto1 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2, "producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON); // string

localStorage.setItem("producto1", enJSON); // se guarda como {"id":2,"producto":"Arroz"}


// Parse => transformar string en formato JSON a objeto JavaScript:
const enJSON = '{"id": 2, "producto": "Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 2


const productos = [
    { id: 1, producto: "Arroz", precio: 125 },
    { id: 2, producto: "Fideo", precio: 70 },
    { id: 3, producto: "Pan", precio: 50 },
    { id: 4, producto: "Flan", precio: 100 }
];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }; // almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
guardarLocal("listaProductos", JSON.stringify(productos)); // o almacenar array completo