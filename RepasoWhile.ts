// Punto 6

let arrayNumeros = [1,1,1,1,1,5,7,9,13];

function comprobarPares(arrayPares:number[]){
    let i:number = 0;
    while(arrayPares[i]%2 != 0 && i<arrayPares.length){
        i++;

    }
        if(i < arrayPares.length ){
            return true
        }else{
            return false
        }
}

console.log(comprobarPares(arrayNumeros));

