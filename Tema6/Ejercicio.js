
const readLine = require("readline-sync"); //Importamos la libreria para poder escribir el numero
const num = readLine.question("Introduce un numero: "); //Usamos el metodo para escribir el numero.

if(isNaN(num)){//Comprobamos que hemos introducido un numero(NaN = Significa no es un numero).
    console.log("No has introducido un numero");
}else{
    console.log("El numero es: ", num); //Nos imprime el numero que escribimos.
}
