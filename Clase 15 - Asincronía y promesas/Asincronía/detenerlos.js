// SET TIMEOUT and SET INTERVAL

// Métodos para detener:
clearInterval();
clearTimeout();


// Declaramos el intervalo en una variable para controlarla:
count=0;
let idInterval = setInterval(nada, 1000);
function nada(){
    count++
    console.log(count); // el orden del console.log es importante
    if(count==5) { clearInterval(idInterval); }
}



console.log("Inicio")
const fin = setTimeout(() => { console.log("fin")}, 2000);
clearTimeout(fin); // sólo imprime Inicio