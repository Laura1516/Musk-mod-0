/*Escribe un programa que reciba dos números por consola que serán la base y la altura de un
rectángulo de asteriscos que se deberá pintar por pantalla*/

const readLine = require("readline-sync");
const altura = readLine.question("Introduce la altura del rectangulo: ");
const anchura = readLine.question("Introduce la anchura del rectangulo: ");

for(let i=0; i< altura; i++){
    let linea = "";
    for(let j=0; j< anchura; j++){
        //Si estamos en la primera posicion o en la ultima se pinta un asterisco
        if(i == 0 || i == altura - 1 || j == 0 || j == anchura - 1 ){
            linea += "*";
        }else{//Si es otra posicion distinta a la primera y la ultima se deja un espacio
            linea +=" ";  
        }
         
    }
    console.log(linea);
}