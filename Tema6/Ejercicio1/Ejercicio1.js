/*Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o
impar y si es positivo o negativo. Si la entrada no es un número, se deberá pintar “No es un
número”.*/

const readLine = require("readline-sync");
const numero = readLine.question("Introduce un numero: ");

if(!(isNaN(numero))){ //Si es un numero miramos las demas comprobaciones
    if(numero % 2 == 0 && numero >= 0){//Miramos si el numero es Par y positivo
        console.log("El numero es par y positivo ");
    }else if(numero % 2 == 0 && numero < 0){//Miramos si el numero es Par y negativo
        console.log("El numero es par y negativo ");
    }else if(!(numero % 2 == 0) && numero >=0){//Miramos si el numero es impar y positivo
        console.log("El numero es impar y positivo ");
    }else if(!(numero % 2 == 0) && numero < 0){//Miramos si el numero es impar y negativo
        console.log("El numero es impar y negativo ");
    }
}else{//Si de primeras no metemos un numero no hace ninguna validacion y salta el siguiente mensaje.
    console.log("No es un numero ");
}