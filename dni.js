
const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
const numLetras = 23;

function esDniExtranjero(texto){
    if ((texto[0] === "X") || (texto[0] === "Y") || (texto[0] === "Z") ){
        return true;
    }else return false;
}

//fucntion rellenarCeros(cadena)

function calcularLetraDniPrograma(){
    //obtener el numero de la caja
    var num = document.getElementById("dni").value;
    var letraExtranjero = document.getElementById("letraExtranjero").value;
    var fullDni = letraExtranjero + num;
    
    //calcular la letra
    var letra = calcularLetraDni(fullDni);

    //mostrar la letra
    alert("la letra de su dni es " + letra);
}


function calcularsLetraDni(fullDni) {

    var letraExtranjero = fullDni[0];
    var num = fullDni
    if (esDniExtranjero(fullDni)) {
        num = fullDni.substr(1, 8)
        switch (letraExtranjero) {
            case 'X':
                num = 0 + num;
                break;
            case 'Y':
                num = 1 + num;
                break;
            case 'Z':
                num = 2 + num;
                break;
        }
    }

    var resto = num % numLetras;
    var letra = letras[resto];
    return letra;
}

 module.exports = esDniExtranjero;
//  module.exports =  calcularLetraDni;