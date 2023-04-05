function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(10, 5, "*"));
console.log(calculadora(4, 20, "+"));
console.log(calculadora(55, 19, "-"));
console.log(calculadora(30, 6, "/"));