/*Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla la
circunferencia y el área del círculo.*/

const readLine = require("readline-sync");
const radio = readLine.question("Introduce el radio: ");

function calcularLongitud(radio){
    let longitud = 2 * Math.PI * radio;

    return longitud;
}

function calcularArea(radio){
    let area = Math.PI * (radio * radio);

    return area;
}

console.log("La circunferencia es: ", calcularLongitud(radio));
console.log("El area del circulo es ", calcularArea(radio));