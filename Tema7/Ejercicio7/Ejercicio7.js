/*Implementa una función que reciba un texto (string) y que devuelva una matriz bidimensional de
ancho 5 y de alto indeterminado que incorpore las palabras (elementos separados por espacios) del
texto una por una de izquierda a derecha y de arriba a abajo*/

const readLine = require("readline-sync");
//const cadena = readLine.question("Introduce un texto: ");
const cadena = "Hola que tal me llamo laura";
function crearMatriz(cadena){
    let matriz = [];
    let fila = [];
    let palabras = cadena.split(" ");

    for(let i = 0; i<palabras.length; i++){
        fila.push(palabras[i]);
        if(fila.length == 5){
            matriz.push(fila);//Añadimos la fila de 5 elementos a la matriz
            fila = [];//Vaciamos la matriz fila
        }
    }
    if(fila.length > 0){//Si la fila no llega a 5 elementos, la añadimos a la matriz tambien
        matriz.push(fila);
    }
    return matriz;
}

let matriz = crearMatriz(cadena);

function pintarMatriz(matriz){
    
    for(let i = 0; i<matriz.length; i++){
        console.log(matriz[i]);
    }
}

pintarMatriz(matriz);