/*Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si
todos los elementos son únicos en la lista u otra lista con los elementos repetidos en caso contrario.*/

const readLine = require("readline-sync");
let cadena = readLine.question("Introduce una lista de elementos: ");

function validarCadena(cadena){
    cadena = cadena.trim(); //Quitar espacios inecesarios

    const array = cadena.split(',');

    //Comprobamos que haya minimo 2 elementos y que  no haya comas al principio ni al final
    if(array.length > 1 && !array.some(item => item.trim == '')){
        return true;
    }else{
        return false;
    }
}

while(!validarCadena(cadena)){
    console.log("Error.Tiene que estar separado por comas");
    cadena = readLine.question("Introduce una lista de elementos: ");
}

const array = cadena.split(',');

function cadenaRepetida(array){
    const elementoVisto = [];
    const arrayRepetido = [];

    for(let i = 0; i<array.length; i++){
        let elemento = array[i]; //Sacamos el elemento en el que estamos
        if(elementoVisto.includes(elemento) && (!arrayRepetido.includes(elemento))){
            //Si ya esta en este array, esta repetido
            //Evitamos agregar el numero repetido varias veces
            arrayRepetido.push(elemento);//Agregamos el numero a la lista de repetidos
            
        }else{
            elementoVisto.push(elemento);//Si es un elemento nuevo lo agregamos al array de vistos
        }
        
    }
    if(arrayRepetido.length == 0){
        console.log("Todos los elementos son unicos");
    }else{
        console.log("Los elementos repetidos son: ", arrayRepetido);
    }
}

cadenaRepetida(array);