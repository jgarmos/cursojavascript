//numeros aleatorios del 1 al 90 y carton de 3X5

const numeroFilas = 3;
const numeroColumnas = 9;
var carton = [];
var numeroCajasVaciasPorFila = 4;
var posicionesCajaVacia = [];

function generarCarton() {

    var tabla = document.getElementById("tabla"); 
    var escajaVacia = false;

    for (var i = 0; i < numeroFilas; i++) {
        var fila = document.createElement("tr");
        tabla.appendChild(fila);
        
        // crear cajas vacias
        for (var j = 0; j < numeroCajasVaciasPorFila; j++) {
                var numeroAleat = genererarNumeroAleatorio(0, numeroColumnas-1);

                //cuidado con este while puede llegar a ser infinito para cartones grandes
                while (posicionesCajaVacia.includes(numeroAleat)) {
                    numeroAleat = genererarNumeroAleatorio(0, numeroColumnas);
                }
                posicionesCajaVacia.push(numeroAleat);
        }


        for (var k = 0; k < numeroColumnas; k++) {
            var columna = document.createElement("td");
            var id = i + "," + k;
            columna.setAttribute("id",id);
            fila.appendChild(columna);
            

            //calcular si es caja vacia
            escajaVacia = posicionesCajaVacia.includes(k);

            if (!escajaVacia){
                //asignar numero random 
                // generar numero random hasta mientras no esta en mi carton
                var numeroAleatorio = genererarNumeroAleatorio(0, 90);

                //cuidado con este while puede llegar a ser infinito para cartones grandes
                while (carton.includes(numeroAleatorio)) {
                    numeroAleatorio = genererarNumeroAleatorio(0, 90);
                }
                carton.push(numeroAleatorio);
                columna.innerHTML = numeroAleatorio;
            }
        }
        posicionesCajaVacia = [];
    }


    pintarCaja(2,4);
    pintarCaja(0,0);
    pintarCaja(1,3);
    pintarCaja(1,8);


}

function genererarNumeroAleatorio(lim_inferior, lim_superior) {
    num_aleatorio = 0;

    var n1 = Math.random();//entro 0 y 1
    num_aleatorio = (n1 * (lim_superior - lim_inferior + 1)) + lim_inferior
    num_aleatorio = Math.ceil(num_aleatorio);//redondeo

    return num_aleatorio;
}

function pintarCaja(fila,columna){
    var caja = document.getElementById(fila + "," + columna);
    caja.style.color = "red";
}

function esLineaGanada(){
    //cojer elementos que esten marcados en rojo
    var elementos = document.querySelector("td");
    //si los elementos marcados en rojo son igual al numero de nemors en line devolver true


}