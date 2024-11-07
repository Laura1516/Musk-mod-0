/*Implementa una función que reciba un número n por parámetro y devuelva una matriz cuadrada n x
n con números enteros consecutivos de izquierda a derecha y de arriba a abajo.*/

const readLine = require("readline-sync");
const numero = readLine.question("Introduce el tamaño de la matriz: ");

function crearMatriz(numero){
    let matriz = [];
    let contador = 1;
    for(let i = 0; i<numero; i++){
        let fila = [];
        for(let j = 0; j<numero; j++){
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }
    return matriz;
}

let matriz = crearMatriz(numero);

function pintarMatriz(matriz){

    for(let i = 0; i<matriz.length; i++){
        console.log(matriz[i]);
    }
}

pintarMatriz(matriz);