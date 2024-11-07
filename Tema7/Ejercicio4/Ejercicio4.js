/*Implementa una función que reciba por parámetro un array de números y que imprima por pantalla
la suma y la media aritmética de sus elementos.*/

const readLine = require("readline-sync");
let cadena = readLine.question("Introduce una lista de numeros: ");

function validarCadena(cadena){
    cadena = cadena.trim(); //Elimina los espacios

    const array = cadena.split(','); //Divide la cadena en un array de string

    if(array.some(item => isNaN(item.trim()))){//Miramos que algun elemento del array no sea un numero
        return false;//Si no es un numero retorna false
    }else{
        return true;// Si es un numero y esta separado por comas retorna true.
    }
}

while(!validarCadena(cadena)){//Se repite hasta que se cumpla los requisitos de la cadena
    console.log("Error. El array tiene que ser numero y estar separado por comas");
    cadena = readLine.question("Introduce una lista de numeros: ");
}

const array = cadena.split(','); //Divide la cadena en un array de string

function sumarArray(array){
    let suma = 0;

    for(let i = 0; i<array.length; i++){
        suma += parseFloat(array[i]);//Convierte cada elemento en un numero para poder sumarlo
    }

    return suma;
}

let suma = sumarArray(array); //Sacamos el valor de la suma

function mediaArray(array, suma){ //Llamamos al parametro del array y de la suma
    let media = suma / array.length; //Dividimos la suma entre la longitud del array

    return media;
}
console.log("La suma es: ", sumarArray(array));
console.log("La meda aritmetica es ", mediaArray(array, suma));