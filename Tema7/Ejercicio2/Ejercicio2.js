/*Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área.*/

const readLine = require("readline-sync");
const radio = readLine.question("Introduce el radio: ");

function calcularArea(radio){
    let area = Math.PI * (radio * radio); //radio * radio = radio al cuadrado.
    
    return area;
}

console.log("El area del circulo es: ", calcularArea(radio));