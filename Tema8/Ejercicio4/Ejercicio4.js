/*Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map.*/

const readLine = require("readline-sync");
const cadena = readLine.question("Introduce una palabra: ");
const cadena2 = readLine.question("Introduce otra palabra: ");


function contarFrecuencia(cadena){
    let frecuencia = new Map();//Creamos la frecuencia

    for(const caracter of cadena){
        if(frecuencia.has(caracter)){//Miramos si el caracter esta en la frecuencia
            frecuencia.set(caracter, frecuencia.get(caracter) + 1);//Si esta le añadimos 1
        }else{
            frecuencia.set(caracter, 1);//Si no esta lo dejamos como 1
        }
    }

    return frecuencia;

}

function comprobarAnagrama(cadena, cadena2){

    if(cadena.length !== cadena2.length){//Miramos que las cadenas tengan la misma longitud
        console.log("No son anagramas");
        return;//Salimos el bucle y pasamos a la siguiente interaccion
    }
    
    //Sacamos la frecuencia de cada cadena.
    const frecuencia = contarFrecuencia(cadena);
    const frecuencia2 = contarFrecuencia(cadena2);

    for(const [caracter, cantidad] of frecuencia){
        if(frecuencia2.get(caracter) != cantidad){//Miramos que los caracteres de la frecuencia sea distinta a la cantidad
            console.log("No son anagramas");//Si es asi no son anagramas
            return;//Salimos el bucle y pasamos a la siguiente interaccion
        }
    }

    console.log("Las palabras son anagramas");//Si no se cumple nada de lo anterior son anagramas.
    
}

comprobarAnagrama(cadena, cadena2);