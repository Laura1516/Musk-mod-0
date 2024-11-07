/*Implementa una función que reciba un string y devuelva si es o no un palíndromo
(independientemente de los espacios)*/

const readLine = require("readline-sync");
const cadena = readLine.question("Introduce un texto: ");

function comprobarPalindromo(cadena){
    //Dividimos la cadena en en un array con espacios u luego le quita los espacios y pasamos todas las letras a minusculas
    let cadenaLimpia = cadena.split(' ').join('').toLowerCase();
    let longitud = cadenaLimpia.length;

    for(let i = 0; i<longitud / 2; i++){//Solo comprobamos la mitad de la cadena, ya que estamos que el principio y el final sea igual
        if(cadenaLimpia[i] != cadenaLimpia[longitud - 1 - i]){
            console.log("No es palindromo");
            return false;
        }
    }
    console.log("Si es palindromo");
    return true;
    
}

comprobarPalindromo(cadena);