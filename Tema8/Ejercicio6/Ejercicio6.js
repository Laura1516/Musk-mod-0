/*Implementa el algoritmo de ordenación quicksort y comprueba cuánto tarda en ejecutarse sobre un
array de números aleatorios de tamaño 100.000*/

/* Comentario para el git hub para cambiar el archivo*/
const crypto = require("crypto");

let lista = [];

for(let i = 0; i< 100000; i++){
    lista.push(crypto.randomInt(100));
}
console.time("El algoritmo quicksort ha tardado en ordenar 100000 elementos");

function ordenarArray(array){
    if(array.length <= 1){
        return array;
    }

    const pivote = array[Math.floor(array.length / 2)];//Elegimos el pivote del medio
    const derech = [];//Elementos menores que el pivote
    const izq = [];//Elementos mayores que el pivote

    for(let i = 0; i < array.length; i++){
        if(array[i] < pivote){//Si la posicion es menor que la del pivote
            derech.push(array[i]);//Metemos esa posicion en el array derech
        }else if(array[i] > pivote){
            izq.push(array[i]);//Si es mayor lo metemos en el array de la izq
        }
    }

    //Recursion y ordenacion de los resultados
    return [...ordenarArray(derech), pivote, ...ordenarArray(izq)];
}
ordenarArray(lista);
console.timeEnd("El algoritmo quicksort ha tardado en ordenar 100000 elementos");