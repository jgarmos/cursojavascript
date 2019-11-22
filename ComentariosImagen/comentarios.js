
// ***************login***********************
//Como ususario quiero loguearme en el sistema

const URISession = "http://10.1.2.10:8081/cfticionic/usuariocftic";
const URIfotoAPI = "http://10.1.2.10:8081/cfticionic/fotos";
var request;
var fotos;

class Usuario {
    constructor(nombre, pwd) {
        this.nombre = nombre,
            this.pwd = pwd
    }
    mostrar() {
        console.log(this.nombre + " " + this.pass);
    }

}

function login() {
    // cojer nombre de usuario
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("pass").value;
    var usuario = new Usuario(username, password);

    //validar  

    //enviar
    llamarApiSession(usuario);


}

function mostrarFotos() {
    llamarApiFotos();

}

//  POST

// function GetTokenUsuario(usuario){
//     llamarApiConAjax(usuario)

// }

function mostrarSesion() {

}

function crearFotos() {
    var divFotos = document.getElementById("fotos");
    for (let i = 0; i < fotos.length; i++) {
        var img = document.createElement("img");
        img.setAttribute("src", fotos[i].ruta);
        divFotos.appendChild(img);
    }

}
function llamarApiFotos() {
    var uri = URIfotoAPI;
    request = new XMLHttpRequest();
    request.onreadystatechange = procesarFotosResponse;
    request.open('GET', uri, true);
    request.send(null);
}


function procesarFotosResponse() {
    if (request.readyState == 4) {
        if (request.status == 200) { //exito
            var cuerpo = request.responseText;
            fotos = JSON.parse(cuerpo);
            crearFotos();
        } else {
            console.log("error " + request.status);
        }
    }
}

function llamarApiSession(usuario) {
    var uri = URISession;
    request = new XMLHttpRequest();
    request.onreadystatechange = procesarEventosRecibir;
    request.open('POST', uri, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(usuario));
}
function procesarEventosRecibir() {
    if (request.readyState == 4) {
        if (request.status == 200) { //login exitoso
            var cuerpo = request.responseText;
            var sesion = JSON.parse(cuerpo)

            //guardar sesion en local estorage
            guardarEnLocalStorage(sesion.nombre, sesion.token);
            redireccionarAHomepage();

        } else {
            console.log("error " + request.status);
        }
    }
}

function redireccionarAHomepage() {
    window.location = "homepage.html";
}

//*************Local storage****************
function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}

function leerSesionDelLocalStorage(clave) {
    return localStorage.getItem(clave);
}

// function guardar (clave, valor)
//         {
//             localStorage.setItem(clave, valor);
//         }
//         function leer (clave)
//         {
//             var valor;

//                 valor = localStorage.getItem(clave);

//             return valor;
//         }
//         function borrar (clave)
//         {
//             localStorage.removeItem(clave);
//         }
//         function existe (clave)
//         {
//             var esta = false;

//                 esta = (localStorage.getItem(clave)!=null);

//             return esta;
//         }
//         function limpiarMemoria ()
//         {
//             localStorage.clear();
//         }

//         guardar('usuario', 'javi');
//         var usuario = leer ('usuario');
//         console.log ("usuario = " + usuario);
//         console.log ("existe usuario = " +existe('usuario'));
//         borrar('usuario');
//         console.log ("existe usuario = " +existe('usuario'));
//         guardar('usuario', 'javi');
//         limpiarMemoria();









//una vez logueado

//mostrar nombre de la sesion
// Como usuario quiero  poder crear comentarios para la foto

//como usuario puedo quiero poder  eliminar un comentario que haya creado previamente


//

