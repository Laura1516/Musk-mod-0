/*Implementa una función que reciba un número y devuelva si dicho número es primo o no.*/

const readLine = require("readline-sync");
const numero = readLine.question("Introduce un numero: ");

function numeroPrimo(numero){

    if(numero <= 1){//Los numero menores o igual 1 no son primos
        console.log(numero, " no es primo");
        return false;
    }

    //Empezamos desde 2, porque si empezamos en 1 o 0, la division seria entre esos numero, por lo que serian primos siempre
    for(let i = 2; i<numero; i++){
        if(numero % i == 0){
            console.log(numero, " no es primo");
            return false;
        }
    }
    console.log(numero, " es primo");
    return true;
}
numeroPrimo(numero);