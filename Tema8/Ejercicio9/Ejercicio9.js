/*Implementa una función que verifique si una secuencia de paréntesis, corchetes, y llaves es válida. Es
decir, se abren tantos como se cierran y cada secuencia está siempre contenida.*/

const readLine = require("readline-sync");

function validarCadena(){

    while(true){
        const cadena = readLine.question("Introduce un secuencia: ");
       
        // Verificamos que la cadena solo tenga parentesis, corchetes o llaves.
        let esValida = true;
        for (let i = 0; i < cadena.length; i++) {
            if (!["(", ")", "[", "]", "{", "}"].includes(cadena[i])) {
                console.log("Solo puedes escribir parentesis, corchetes o llaves ");
                esValida = false;
                break;
            }
        }
        
        if (esValida) {
            return cadena; 
        }
    }
    
}

function secuencia(cadena){

    const pila = [];
    const pares = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    for(let i = 0; i<cadena.length; i++){
        if(cadena[i] === "(" || cadena[i] === "[" || cadena[i] === "{"){
            pila.push(cadena[i]);
        }else if(cadena[i] === ")" || cadena[i] === "]" || cadena[i] === "}"){
            if(pila.length === 0 || pila.pop() !== pares[cadena[i]]){
                console.log("Secuencia incorrecta");
                return;
            }
        }
    }

    if(pila.length === 0){
        console.log("Secuencia correcta");
    }else{
        console.log("Secuencia incorrecta");
    }
}

const cadenaValida = validarCadena();
secuencia(cadenaValida);