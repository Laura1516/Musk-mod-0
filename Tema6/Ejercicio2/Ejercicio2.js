/*Escribe un programa que pida al usuario tres números y que pinte por pantalla si al menos uno de
ellos es par.*/

const readLine = require("readline-sync");
const numero1 = readLine.question("Introduce un numero 1: ");
const numero2 = readLine.question("Introduce un numero 2: ");
const numero3 = readLine.question("Introduce un numero 3: ");

//Comprobamos si alguno de los numero introducidos es par
if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0){
    console.log("Hay algun numero par");
}else{
    console.log("No hay ningun numero par");
}