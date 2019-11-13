//numeros aleatorios del 1 al 90 y carton de 3X5

const numeroFilas = 3;
const numeroColumnas = 5;
const numeroCajasVaciasPorFila = 4;
var posicionesCajaVacia = [];
var cartonVacioCreado = false;
var bolasSacadas = [];
var bombo;
var carton = [];
var contadorAcertadas = 0;
var contadorLinea;

function bingo() {
    var tabla = document.getElementById("tabla");
    
    //var escajaVacia = false;

    if(!cartonVacioCreado){
        dibujarCartonVacio(numeroFilas, numeroColumnas);
        cartonVacioCreado = true;
    }

    bombo = document.createElement("img");
    bombo.setAttribute("src", "https://thumbs.gfycat.com/InnocentBlackGemsbuck-size_restricted.gif");
    bombo.style.visibility = "hidden"
    var divJuego = document.getElementById("juegoContainer");
    divJuego.appendChild(bombo);

    var numerosPorCarton = numeroFilas * numeroColumnas; //numeroFilas * numeroColumnas - (numeroCajasVaciasPorFila - numeroFilas);
    carton = generarNumerosAleatoriosOrdenadosYnoRepetidos(numerosPorCarton);
    rellenarCarton(carton);


    // pintarCaja(2, 4);
    // pintarCaja(0, 0);
    // pintarCaja(1, 3);
    // pintarCaja(1, 8);
    //esLineaGanada();

}
function sacarBola(){
    // dibujar gif bombo
    bombo.style.visibility = "visible";
    
    var bolaSacada;
    setTimeout(function()
    { bolaSacada = ocultarBomboYmostrarNumero(bombo); 
    }, 1000);

    


     
    //  

    // ocultar dibujo y muestro el numero
    // guardo numero para controlar repetidos en listaBolasExtraidas 
    //si esta marco mi numero
    // calcular bingo y linea

}

function ocultarBomboYmostrarNumero(bombo){
    bombo.style.visibility = 'hidden';
    
    // obtener numero aleatorio
    var num_aleatorio = numeroAleatorio = genererarNumeroAleatorio(0, 90);
    while (numeroExisteEnArray(bolasSacadas, numeroAleatorio)) {
        numeroAleatorio = genererarNumeroAleatorio(0, 90);
    }
    bolasSacadas.push(numeroAleatorio);

    var bola = document.getElementById("bola");
    bola.innerHTML = numeroAleatorio;
    bola.style.visibility = "visible";

    //encontrar si el numero esta en mi carton
    if (numeroExisteEnArray(carton,numeroAleatorio)) {

        contadorAcertadas++;
        
        var tds = document.querySelectorAll("td");//document.getElementsByTagName("value",String(numeroAleatorio));
        var casilla;
        
        var numeroEncontrado;
        var tdIndex = 0;
        
        //marcar numero en carton
        while(!numeroEncontrado){
            if(tds[tdIndex].innerHTML == numeroAleatorio ){
                numeroEncontrado = true;
            }else{
                tdIndex++;
            }
        }
        tds[tdIndex].setAttribute("class","marcado");
        // tdIndex = 0;
        // for (var i = 0; i < tds.length; i++) {
        //     if()
        // }
        
        
        //calcular lineas
        if(esLineaGanada()){

        }

        if (contadorAcertadas == numeroFilas * numeroColumnas){
            alert(" YOU WINNER!!!!!!!!")
        }
        

        


    }


}
function rellenarCarton(numerosAleatorios) {

    var numerosAleatoriosIndex = 0;

    for (var i = 0; i < numeroFilas; i++) {
        for (var k = 0; k < numeroColumnas; k++) {
            var element = document.getElementById(i + "," + k);
            element.innerHTML = numerosAleatorios[numerosAleatoriosIndex];
            element.setAttribute("numeroAsignado",numerosAleatorios[numerosAleatoriosIndex]);             
            numerosAleatoriosIndex++;
        }
    }
}

function generarNumerosAleatoriosOrdenadosYnoRepetidos(numeroDeNumerosAleatorios) {
    var miArray = [];
    var numeroAleatorio = genererarNumeroAleatorio(0, 90); //todo:mover a const

    for (var k = 0; k < numeroDeNumerosAleatorios; k++) {
        //cuidado con este while puede llegar a ser infinito para cartones grandes
        while (numeroExisteEnArray(miArray, numeroAleatorio)) {
            numeroAleatorio = genererarNumeroAleatorio(0, 90);
        }
        miArray.push(numeroAleatorio);
    }
    miArray.sort(function (a, b) { return a > b ? 1 : -1 });

    return miArray;
}

function dibujarCartonVacio(filas, columnas) {
    for (var i = 0; i < filas; i++) {
        var fila = document.createElement("tr");
        tabla.appendChild(fila);

        for (var k = 0; k < columnas; k++) {
            var columna = document.createElement("td");
            var id = i + "," + k;
            columna.setAttribute("id", id);
            fila.appendChild(columna);
        }
    }
}

function numeroExisteEnArray(array, num) {
    return array.includes(num);
}

function genererarNumeroAleatorio(lim_inferior, lim_superior) {
    num_aleatorio = 0;

    var n1 = Math.random();//entro 0 y 1
    num_aleatorio = (n1 * (lim_superior - lim_inferior + 1)) + lim_inferior
    num_aleatorio = Math.ceil(num_aleatorio);//redondeo

    return num_aleatorio;
}

function marcarCaja(numero) {
    var caja = document.getElementBy
}

function pintarCaja(fila, columna) {
    var caja = document.getElementById(fila + "," + columna);
    caja.style.color = "red";
}

function esLineaGanada() {
    //cojer elementos que esten marcados en rojo
   
    var tds = document.querySelectorAll("td");
    var numerodeFilaInsertados = [];
    var contadorMaximoLinea = 0;
    var indexFila = 0;
    
    var contadorFilaAux =0;
    for (let index = 0; index < tds.length; index++) {
        const element = tds[index];
        if (element.classList.contains("marcado")){ 
            indexFila = element.id[0];
            
            //numeroFilasInsertados.push(indexFila);

            if(contadorFilaAux > contadorMaximoLinea){
                contadorMaximoLinea = contadorFilaAux;
            }
            if (contadorMaximoLinea == numeroColumnas){
                return true;
            }
        }
    }
    return false;

    

    //si los elementos marcados en rojo son igual al numero de nemors en line devolver true

}

// for (var i = 0; i < numeroFilas; i++) {
    //     var fila = document.createEles   ment("tr");
    //     tabla.appendChild(fila);

    //     // crear cajas vacias
    //     for (var j = 0; j < numeroCajasVaciasPorFila; j++) {
    //             var numeroAleat = genererarNumeroAleatorio(0, numeroColumnas-1);

    //             //cuidado con este while puede llegar a ser infinito para cartones grandes
    //             while (posicionesCajaVacia.includes(numeroAleat)) {
    //                 numeroAleat = genererarNumeroAleatorio(0, numeroColumnas);
    //             }
    //             posicionesCajaVacia.push(numeroAleat);
    //     }

    //     for (var k = 0; k < numeroColumnas; k++) {
    //         var columna = document.createElement("td");
    //         var id = i + "," + k;
    //         columna.setAttribute("id",id);
    //         fila.appendChild(columna);


    //         //calcular si es caja vacia
    //         escajaVacia = posicionesCajaVacia.includes(k);

    //         if (!escajaVacia){
    //             //asignar numero random 
    //             // generar numero random hasta mientras no esta en mi carton
    //             var numeroAleatorio = genererarNumeroAleatorio(0, 90);

    //             //cuidado con este while puede llegar a ser infinito para cartones grandes
    //             while (numeroExisteEnCarton(numeroAleatorio)) {
    //                 numeroAleatorio = genererarNumeroAleatorio(0, 90);
    //             }
    //             carton.push(numeroAleatorio);
    //             columna.innerHTML = numeroAleatorio;
    //         }
    //     }
    //     posicionesCajaVacia = [];
    // }