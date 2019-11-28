
// ***************login***********************


const URISession = "http://10.1.2.10:8081/cfticionic/usuariocftic";
const URIfotosAPI = "http://10.1.2.10:8081/cfticionic/fotos";
const URIFOTOAPI =  "http://10.1.2.10:8081/cfticionic/foto"  // http://10.1.2.10:8081/cfticionic/foto?key=CQOYQYTQ3CP3&idfoto=3
const URICommentsAPI =  "http://10.1.2.10:8081/cfticionic/comentarios/foto" // http://10.1.2.10:8081/cfticionic/comentarios/foto?key=CQOYQYTQ3CP3&idfoto=5


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


function mostrarSesion() {

}

function peliculaInfo(elemImg){
    
    var idFoto = elemImg.id;

    //obtener info foto 
    redireccionarAPeliculaPage();
    
    llamarApiFoto(idFoto);


    //obtener comentarios
    //llamarApiComentarios(idFoto);


    //redicreccionar a pelicula page
    
}





function crearFotos() {
    var fotosDiv = document.getElementById("fotos");
    for (let i = 0; i < fotos.length; i++) {
        
        var img = document.createElement("img");

        img.setAttribute("src", fotos[i].ruta);
        img.setAttribute("id", fotos[i].idfoto);
        img.setAttribute("onclick","peliculaInfo(this)");
        fotosDiv.appendChild(img);
    }
}

function llamarApiComentarios(fotoId){
    var uri = URICommentsAPI ;
    //cojer key de session de localstorage
    var session = leerSesionDelLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token + "&idfoto" + fotoId;

    request = new XMLHttpRequest();
    request.onreadystatechange = procesarPeliculaInfo;
    request.open('GET', uri, true);
    request.send(null);

}

function llamarApiFoto(fotoId){
    var uri = URIFOTOAPI;
    //cojer key de session de localstorage
    var session = leerSesionDelLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token + "&idfoto" + fotoId;

    request = new XMLHttpRequest();
    request.onreadystatechange = procesarPeliculaInfo;
    request.open('GET', uri, true);
    request.send(null);

}

function procesarPeliculaInfo() {
    if (request.readyState == 4) {
        if (request.status == 200) { //exito
            var cuerpo = request.responseText;
            var pelicula = JSON.parse(cuerpo);
            mostrarPeliculaInfo(pelicula);
        } else {
            console.log("error " + request.status);
        }
    }
}

function mostrarPeliculaInfo(pelicula){
    var fotoDiv = document.getElementById("foto");

    var img = document.createElement("img");

    img.setAttribute("src", pelicula.ruta); 
    
    fotoDiv.appendChild(img);
}


function llamarApiFotos() {
    var uri = URIfotosAPI;
    //cojer key de session de localstorage
    var session = leerSesionDelLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token;

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
    //cojer sesesion

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
            guardarEnLocalStorage("session", cuerpo);
            redireccionarAHomepage();

        } else {
            console.log("error " + request.status);
        }
    }
}

function redireccionarAHomepage() {
    window.location = "homepage.html";
}


function redireccionarAPeliculaPage (){
    window.location = "pelicula.html";

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

