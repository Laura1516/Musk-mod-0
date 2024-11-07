/*Crea un programa que declare una constante de tipo array que contenga los diez primeros
números de la secuencia de Fibonacci y que modifique los valores de dicho array
multiplicándolos por dos y mostrando el resultado por pantalla*/

const numeros = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
//Recorremos el Array 
for( let i = 0; i<numeros.length; i++){
    numeros[i] = numeros[i] * 2;//Multiplicamos todos los numeros del array por 2.
}
console.log("Array Multiplicado: ", numeros);//Mostramos el array multiplicado