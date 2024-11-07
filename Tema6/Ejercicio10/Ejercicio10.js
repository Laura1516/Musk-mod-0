/*Escribe un programa que genere un número aleatorio del 1 al 10.
Haz que el programa pregunte al usuario números hasta que acierte el número aleatorio generado.
El programa debe mantener una cuenta de cuántos intentos han hecho falta hasta acertar el número.
Cuando el usuario acierte el número aleatorio, el programa mostrará por pantalla el número de
intentos.*/

const randomNumber = Math.floor(Math.random()*10) + 1; //Genera un numero aleatorio

console.log("He pensado un numero del 1 al 10. ¡Intenta adivinarlo!");
const readLine = require("readline-sync");

let intentos = 0;
let numeroValido = false;

while(!numeroValido){//Se ejecuta el bucle hasta que se inserte un numero que cumpla las condiciones
    const numero = readLine.question("Adivina: ");
    if(!(numero == randomNumber)){//Si el numero es distinto que el aleatorio
        intentos++; //Incrementamos el contador
        console.log("¡Fallo!");
    }else{//Si coinciden los numeros
        console.log("¡Correcto! Has necesitado "+intentos+" intentos");
        numeroValido = true;//Salimos del bucle
    }
}
