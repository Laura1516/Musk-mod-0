/*Implementa una función que reciba por parámetro el radio de un círculo y que devuelva la longitud de
la circunferencia*/

const readLine = require("readline-sync");
const radio = parseFloat(readLine.question("Introduce el radio: "));

function calcularLongitud(radio){
    let longitud = 2 * Math.PI * radio;
    
    return longitud;
}

console.log("La circunferencia es", calcularLongitud(radio));