/*Escribe un programa que reciba un número del usuario y pinte un triángulo de asteriscos cuya altura
sea el número recibido*/

const readLine = require("readline-sync");
const altura = readLine.question("Introduce la altura del triangulo : ");

for (let i = 1; i <= altura; i++) {
    let linea = '';// Creamos la linea

    // Añadir los espacios para formar el triangulo equilatero
    for (let j = 1; j <= altura - i; j++) {
        linea += ' ';
    }

    // Añadir los asteriscos necesarios a la línea
    for (let k = 1; k <= (2 * i - 1); k++) {
        linea += '*';
    }
    
    console.log(linea);
}
