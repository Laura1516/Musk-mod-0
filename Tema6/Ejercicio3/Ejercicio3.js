/*Escribe un programa que tome un número como entrada y calcule su factorial.*/


const readLine = require("readline-sync");
const numero = readLine.question("Introduce un numero : ");

let resultado = 1;

for(let i = 1; i<=numero; i++){//incrementamos i en cada interaccion del bucle
    resultado *= i;//en cada recorrido de i se multiplica por ese numero el anterior.
}

console.log("El factorial de " + numero + " es " + resultado);
