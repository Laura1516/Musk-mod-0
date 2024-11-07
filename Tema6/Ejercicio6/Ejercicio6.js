/*Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o
no*/

const readLine = require("readline-sync");
const numero = readLine.question("Introduce un año : ");

if((numero % 4 == 0 && numero % 100 != 0) || (numero % 400 == 0)){ // si es divisible entre 4 y 400 es un año bisiesto
    console.log("El año " + numero + " es bisiesto");
}else{
    console.log("El año " + numero + " no es bisiesto");
}
