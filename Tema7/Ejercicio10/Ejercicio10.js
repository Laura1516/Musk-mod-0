/*Implementa una funcion que reciba una matriz como parametro y devuelva la matriz traspuesta*/

console.log("Matriz de entrada");
const matrizOrig = [[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]];

function pintarMatrizOrig(matrizOrig){
    for(let i = 0; i<matrizOrig.length; i++){
        console.log(matrizOrig[i]);
    }
}
pintarMatrizOrig(matrizOrig);

function crearMatrizTrasp(matrizOrig){
    let matrizTras = [];
    for(let i = 0; i<matrizOrig.length; i++){
        let fila =[];
        for(let j = 0; j<matrizOrig.length; j++){
            fila.push(matrizOrig[j][i]);
        }
        matrizTras.push(fila);
    }
    return matrizTras;
}

let matrizTras = crearMatrizTrasp(matrizOrig);

function pintarMatrizTrasp(matrizTras){
    console.log("Matriz Traspuesta");
    for(let i = 0; i<matrizTras.length; i++){
        console.log(matrizTras[i]);
    }
}

pintarMatrizTrasp(matrizTras);