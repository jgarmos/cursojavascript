const lim_inferior = 1;
const lim_superior = 100;


const PREGUNTA = "¿Que numero creees que he pensado?";
const numeroIntentosMax = 5;


function adivinarNumeroProgram (numeroAdivinado){
    
    var esAdivinado = false;
    var numeroAleatorio = genererarNumeroAleatorio(lim_inferior, lim_superior);
    
    var numeroIntentos = 0;
    while((numeroIntentos < numeroIntentosMax) && !esAdivinado){
        var introNumero = parseInt(pedirNumero());
        if (introNumero > numeroAleatorio){
            alert("mi numero es menor")
        }else if (introNumero < numeroAleatorio){
            alert("mi numero es mayor")
        }else if (introNumero === numeroAleatorio){
            alert("has acertado")
            esAdivinado = true;
        }
        numeroIntentos++;
    }
    if (!esAdivinado){
        alert("Buhh Looser!!!! el  numero que pense era el "+ num_aleatorio );
    }

}


function genererarNumeroAleatorio (lim_inferior, lim_superior)
{
    num_aleatorio = 0;

    var n1 = Math.random();//entro 0 y 1
    num_aleatorio = (n1 * (lim_superior-lim_inferior+1) )+ lim_inferior
    num_aleatorio = Math.ceil(num_aleatorio);//redondeo

    return num_aleatorio;
}
function pedirNumero ()
{
    var num_introducido = 0;
    
        num_introducido = prompt(PREGUNTA);

    return num_introducido;
}
