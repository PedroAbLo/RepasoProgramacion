// Punto 3
var num = 10;
impares(num);
function impares(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
// Punto 4
var array4 = [5, 4, 3, 2, 1];
function revertirArray(arrayEntrada) {
    console.log(arrayEntrada);
    for (var i = 0; i < arrayEntrada.length / 2; i++) {
        var temp = arrayEntrada[i];
        var i2 = arrayEntrada.length - i - 1;
        arrayEntrada[i] = arrayEntrada[i2];
        arrayEntrada[i2] = temp;
    }
    return arrayEntrada;
}
console.log(revertirArray(array4));
// Punto 5
var arrayColorsAleatorios = ["azul", "cyan", "negro", "amarillo"];
function coloresArcoiris(arrayEntrada) {
    // let arrayColores = ["rojo", "naranja", "amarillo", "verde",
    //                      "añil", "azul", "violeta"];
    for (var i = 0; i < arrayEntrada.length; i++) {
        var elemento = arrayEntrada[i];
        if (elemento == "rojo" || elemento == "naranja" || elemento == "amarillo" || elemento == "verde" ||
            elemento == "añil" || elemento == "azul" || elemento == "violeta") {
            console.log(elemento + " es un color del arcoiris");
        }
        else {
            console.log(elemento + " NO es un color del arcoíris");
        }
    }
}
console.log(coloresArcoiris(arrayColorsAleatorios)); //No entiendo por qué me da "undefined" en la última reiteración del bucle for
// Punto 7
var arrayNombres = ["Maria", "Manuel", "Mercedes", "Miguel"];
console.log(nombres(arrayNombres));
function nombres(arrayNames) {
    var contador = 0;
    for (var i = 0; i < arrayNames.length; i++) {
        var nombre = arrayNames[i];
        if (nombre[0] == "M") {
            contador += 1;
        }
    }
    if (contador == arrayNames.length) {
        return "true";
    }
    //  return arrayNumeros.every(c=>c[0]=="M"); //Con método .every().
}
// Punto 8
console.log(contarLetrasArray(arrayNombres));
function contarLetrasArray(arrayNames) {
    var contador = 0;
    for (var i = 0; i < arrayNombres.length; i++) {
        var nombre = arrayNames[i];
        for (var j = 0; j < nombre.length; j++) {
            contador = contador + 1;
        }
    }
    return contador;
}
