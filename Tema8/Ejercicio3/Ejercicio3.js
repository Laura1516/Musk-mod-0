/*Implementa una función que reciba una cadena y devuelva un Map con la frecuencia de cada carácter
en la cadena (las veces que se repite).*/

const readLine = require("readline-sync");
//const cadena = readLine.question("Introduce un texto: ");
const cadena = "Hola";
function repetirCaracteres(cadena){
    const frecuencia = new Map();//creamos el map

    for(const caracter of cadena){
        if(frecuencia.has(caracter)){//Miramos si la frecuencia tiene en caracter
            frecuencia.set(caracter, frecuencia.get(caracter) + 1);//Si lo tiene le sumamos 1
        }else{
            frecuencia.set(caracter, 1);//Si no lo tiene repetido lo dejamos con un 1
        }
    }
    return frecuencia;
}

console.log("Mapa de frecuencias: ", repetirCaracteres(cadena));