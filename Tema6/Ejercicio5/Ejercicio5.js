/*Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a, e, i, o, u)
en la cadena*/


const readLine = require("readline-sync");
const cadena = readLine.question("Introduce una cadena : ");

let contador = 0;

for(let i=0; i<cadena.length; i++){//recorremos la cadena
    //si hay una vocal mayuscula o minuscula incrementamos el contador.
    if(cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u" || cadena[i] == "A" || cadena[i] == "E" || cadena[i] == "I" || cadena[i] == "O" || cadena[i] == "U"){
        contador++;
        
    }
}
console.log("El numero de vocales es: " + contador);//mostramos el contador