/*Implementa una función que reciba dos arrays de números y devuelva un array con los elementos
que están en el primer array pero que no están en el segundo. Pruébala con valores aleatorios.*/

const array1 = [1,2,3,4,5];
const array2 = [3,5];

function comprobarArray(array1, array2){
    let arrayFinal = [];

    for(let i = 0; i<array1.length; i++){
        let encontrado = false;
        for(let j = 0; j<array2.length; j++){
            if(array1[i] === array2[j]){
               encontrado = true;
               break;
            }
        }
        if(!encontrado){
            arrayFinal.push(array1[i]);
        }
    }

    return arrayFinal;
}

console.log("La diferencia de ambos conjuntos es: ", comprobarArray(array1, array2));