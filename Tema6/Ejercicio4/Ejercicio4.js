/*Escribe un programa que tome un número como entrada e imprima la tabla de multiplicar de ese
número del 1 al 10.*/

const readLine = require("readline-sync");
const numero = readLine.question("Introduce un numero : ");

let multiplicador = 1;
let resultado = 0;

while(multiplicador <= 10){//Hace el reccorrido hasta llegar a 10
    resultado = numero * multiplicador; //multiplicamos el numero introducido por el multiplicador que sera la vuelta del while
    console.log(numero + " X " + multiplicador + " = " + resultado);
    multiplicador++; //incrementamos la vuelta
}