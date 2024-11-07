/*Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto*/

const readLine = require("readline-sync");
const cadena = readLine.question("Introduce un texto: ");

function palabrasRepetidas(cadena){
    console.time("Tiempo de busqueda");
    cadena = cadena.toLowerCase();//Lo pasamos todo a minusculas
    let cadenaLimpia = cadena.split(",").join("");//Le quitamos las comas
    let array = cadenaLimpia.split(" ");//Lo metemos en un array
    const encontradas = [];
    const elementoVisto = [];

    for(let i = 0; i<array.length; i++){
        let elemento = array[i];
        if(elementoVisto.includes(elemento) && !encontradas.includes(elemento)){
            encontradas.push(elemento);
        }else{
            elementoVisto.push(elemento);
        }
    }

    let cadenaFinal = encontradas.join(", ");//Pasamos el array a cadena separada por comas

    if(encontradas.length === 0){
        console.log("No hay elemento repetidos");
    }else{
        console.log("Se repiten las siguientes palabras: ", cadenaFinal);
    }
    console.timeEnd("Tiempo de busqueda");//Calculamos el tiempo que tarda en buscar las palabras en la cadena
}

palabrasRepetidas(cadena);