/*Implementa una funcion que reciba un numero y devulva una matriz cuadrada en la
cual cada elemento es el producto de sus indices*/

const readLine = require("readline-sync");
//const numero = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
const numero = 3;
function crearMatriz(numero){
    let matriz = [];
    let contador;
    for(let i = 0; i<numero; i++){
        let fila = [];
        for(let j = 0; j<numero; j++){
            contador = i * j; //Multiplicamos cada indice.
            fila.push(contador);
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

