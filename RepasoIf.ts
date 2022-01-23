
// Punto 1

// Aries	21 de marzo – 20 de abril	31
// Tauro	21 de abril – 21 de mayo	31
// Géminis	22 de mayo – 21 de junio	31
// Cáncer	22 de junio – 22 de julio	31
// Leo	23 de julio – 22 de agosto	31
// Virgo	23 de agosto – 22 de septiembre	31
// Libra	23 de septiembre – 22 de octubre	30
// Escorpio	23 de octubre – 22 de noviembre	31
// Sagitario	23 de noviembre – 21 de diciembre	29
// Capricornio	22 de diciembre – 20 de enero	30
// Acuario	21 de enero – 18 de febrero	29
// Piscis	19 de febrero – 20 de marzo	30/31


let dia = 8;
let mes = 3;
console.log(zoodiaco(dia,mes));

function zoodiaco(dia,mes){

    if((dia>=21 && mes == 3) || (dia<=20 && mes == 4)){

        return "Su Signo Zodiacal es: Aries.";

    }
    else if((dia>=21 && mes == 4) || (dia<=21 && mes == 5)){

        return "Su Signo Zodiacal es: Tauro."

    }
    else if((dia>=22 && mes == 5) || (dia<=21 && mes == 6)){

        return "Su Signo Zodiacal es: Géminis.";

    }
    else if((dia>=22 && mes == 6) || (dia<=22 && mes == 7)){

        return "Su Signo Zodiacal es: Cáncer";

    }
    else if((dia>=23 && mes == 7) || (dia<=22 && mes == 8)){

        return "Su Signo Zodiacal es: Leo";

    }
    else if((dia>=23 && mes == 8) || (dia<=22 && mes == 9)){

        return "Su Signo Zodiacal es: Virgo";

    }
    else if((dia>=23 && mes == 9) || (dia<=22 && mes == 10)){

        return "Su Signo Zodiacal es: Libra";

    }
    else if((dia>=23 && mes == 10) || (dia<=22 && mes == 11)){

        return "Su Signo Zodiacal es: Escorpio";

    }
    else if((dia>=23 && mes == 11) || (dia<=21 && mes == 12)){

        return "Su Signo Zodiacal es: Sagitario";

    }
    else if((dia>=22 && mes == 12) || (dia<=20 && mes == 1)){

        return "Su Signo Zodiacal es: Capricornio";

    }
    else if((dia>=21 && mes == 1) || (dia<=18 && mes == 2)){

        return "Su Signo Zodiacal es: Acuario";

    }
    else if((dia>=19 && mes == 2) || (dia<=20 && mes == 3)){

        return "Su Signo Zodiacal es: Piscis";
    }
}

//Punto 2

let pais = "españa";
continente("españa");
function continente(pais){
    
    if(pais="españa"||"francia"||"alemania"||"italia"||"holanda"){

            console.log("Estas en Europa.");

        }else if(pais="argentina"||"venezuela"||"brasil"||"colombia"||"ecuador"){

            console.log("Estas en América.")

        }else if(pais="japon"||"china"||"indonesia"||"india"||"tailandia"){

            console.log("Estas en Asia.")

        }else if(pais="nigeria"||"kenia"||"ghana"||"marruecos"||"senegal"){

            console.log("Estas en África.")

        }else if(pais="nueva zelanda"||"australia"||"fiyi"||"tonga"||"samoa"){

            console.log("Estas en Oceanía.")
        }
}

// Punto 9 
// let numero:number = 10;
// parImpar(numero);

function parImpar(num:number){

    if(num%2==0){
        return "El número es par";
        }else{
            return "El número es impar";
        }
}

//Copio la función de contar las letras de un array  aquí debajo
//para poder utilizarla para el punto 10.

function contarLetrasArray(arrayNames:string[]){

    let contador:number = 0;
    for(let i = 0; i < arrayNames.length; i++){
        let nombre = arrayNames[i];
        contador += nombre.length
    }
    return contador;

}

let array1:string[] = ["Casa", "Coche", "Ciudad", "Cesta"]; 
let array2:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3:string[] = ["Venezuela", "Veneno", "Voltaje"];

console.log(contarLetrasArray(array1));
console.log("array1: " +parImpar(contarLetrasArray(array1))); //Array1 es par y tiene 20 letras
console.log("array2: " +parImpar(contarLetrasArray(array2))); //Array1 es impar y tiene 37 letras
console.log("array3: " +parImpar(contarLetrasArray(array3))); //Array1 es par y tiene 22 letras

