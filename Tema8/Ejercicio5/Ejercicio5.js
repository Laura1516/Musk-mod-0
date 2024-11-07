/*Implementa una función que invierta el orden de una palabra usando una pila (stack).*/

const readLine = require("readline-sync");
const cadena = readLine.question("Introduce una palabra: ");

function invertirCadena(cadena){
    let pila = [];
    let cadenaFinal = "";

    for(const caracter of cadena){
        pila.push(caracter);//Metemos cada caracter de la cadena en una posicion del array

    }
    
    while(pila.length > 0){//Mientas la longitud del array sea mayor a 0
        cadenaFinal += pila.pop();//Sacamos el ultimo elemento del arrya y lo metemos en la cadena

    }

    return cadenaFinal;

}
console.log("La palabra invertida es:", invertirCadena(cadena));