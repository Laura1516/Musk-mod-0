/* Escribe un programa que solicite un número al usuario (del 0 al 10) y devuelva el número escrito en
letras. Si el valor introducido no está dentro del rango 0-10 o no es un número se deberá volver a
solicitar un número*/

const readLine = require("readline-sync");


let numeroEscrito = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
let numeroValido = false;

while(!numeroValido){//Se ejecuta el bucle hasta que se inserte un numero que cumpla las condiciones
    const numero = readLine.question("Introduce un numero del 1 al 10: ");
    if(!isNaN(numero) && numero >= 0 && numero <= 10){
        console.log(numeroEscrito[numero]);//Sacamos el numero que necesitamos del array con la posicion en la que estamos
        numeroValido = true;//Salir del bucle
    }
}
