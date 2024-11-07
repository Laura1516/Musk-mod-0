/*Implementa una función que, dado un texto con paréntesis, indique si dichos paréntesis están
balanceados (se cierran todos los que se abren)*/

const readLine = require("readline-sync");

function validarCadena() {
    while (true) {
        const cadena = readLine.question("Introduce un texto: ");
        
        // Verificamos que la cadena solo tenga parentesis
        let esValida = true;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] !== '(' && cadena[i] !== ')') {
                console.log("Solo puedes escribir parentesis ");
                esValida = false;
                break;
            }
        }
        
        if (esValida) {
            return cadena; 
        }
    }
}

function parentesis(cadena){
    
    const abierto = [];
    const cerrado = [];
    for(let i = 0; i<cadena.length; i++){
        if(cadena[i] === "("){
            abierto.push(cadena[i]);
        }else if(cadena[i] === ")"){
            cerrado.push(cadena[i]);
        }
    }
    if(abierto.length === cerrado.length){
        console.log("Estan balanceados");
    }else{
        console.log("No estan balanceados");
    }
}
const cadenaValida = validarCadena();

parentesis(cadenaValida);