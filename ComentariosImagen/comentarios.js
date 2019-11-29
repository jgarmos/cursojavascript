
// ***************login***********************


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

class NuevoComentario {
    constructor(usuario,texto,token,peliculaId ) {
        this.nombre = nombre,
        this.pwd = pwd,
        this.token = token,
        this.peliculaId
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
    
    //guardar fotoId en local storage antes de rediredccionar
    guardarEnLocalStorage("peliculaId", idFoto);


    //obtener info foto 
    redireccionarAPeliculaPage();
    
    llamarApiFoto(idFoto);


    //obtener comentarios
    //llamarApiComentarios(idFoto);


    //redicreccionar a pelicula page
    
}
//esta es mi funcion onLoad que llama a la API para cargar la informacion en la nueva pagina 
function cargarPeliculaInfo(){
    var ultimaPeliculaClickadaId = leerDeLocalStorage("peliculaId")
    llamarApiFoto(ultimaPeliculaClickadaId);
    llamarApiComments(ultimaPeliculaClickadaId);
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
    var session = leerDeLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token + "&idfoto" + fotoId;

    request = new XMLHttpRequest();
    request.onreadystatechange = procesarPeliculaInfo;
    request.open('GET', uri, true);
    request.send(null);

}

function mostrarPeliculaInfo(pelicula){
    var fotoDiv = document.getElementById("foto");

    var img = document.createElement("img");

    img.setAttribute("src", pelicula.ruta); 
    
    fotoDiv.appendChild(img);
}

function mostrarPeliculaComments(comentarios){
    var commentsDiv = document.getElementById("comentarios");
    
    var comentariosElement =  document.getElementById("comentarios2");
    

    var contadorComentarioElement = document.getElementById("numeroComentarios");
        contadorComentarioElement.innerHTML = "numero de comentarios = " + comentarios.length;

    comentarios.forEach(comentario => {
        var comentarioId = comentario.id;
        var autor = comentario.autor;
        var idfoto = comentario.idfoto;
        var momento = comentario.momento;
        var texto = comentario.texto;

        // //crear elementos html
        // var comentarioDiv = document.createElement("div");
        // comentarioDiv.setAttribute("id", comentarioId );

        // var textoP = document.createElement("p");
        // var autorP = document.createElement("p");
        // autorP = "Autor: " + autorP;
        // textoP.innerHTML = "Texto: " + texto;

        
        // comentarioDiv.appendChild(textoP);
        // commentsDiv.appendChild(comentarioDiv);

        



        var elementoComentario = crearElementoComentario(comentario);
        comentariosElement.appendChild(elementoComentario);

    });
}
function crearFotoCommentElement(){
    var column = document.createElement("div");
    column.setAttribute("class","col-xs-2 col-md-1");

    var img = document.createElement("img");
    img.setAttribute("src","http://placehold.it/80");
    img.setAttribute("class","img-circle img-responsive");
    img.setAttribute("alt","");    
    column.appendChild(img);
    return column;
} 

function crearTextoCommentElement(texto){
    var commentTextDiv = document.createElement("div");
    commentTextDiv.setAttribute("class","comment-text");

    commentTextDiv.innerHTML = texto;

    return commentTextDiv;
} 

function crearUserNameAndDateELement(comentario){

    var containerDiv = document.createElement("div");
    containerDiv.setAttribute("class","mic-info");
    containerDiv.innerHTML = "Por: ";

    var aElement = document.createElement("a");
    aElement.setAttribute("href","#");
    aElement.innerHTML = comentario.autor;

    containerDiv.appendChild(aElement);

    return containerDiv;
}

function crearBotonesElement(){
    var actionElement = document.createElement("div");
    actionElement.setAttribute("class","action");

    var buttonEditar = document.createElement("button");
    buttonEditar.setAttribute("type","button");
    buttonEditar.setAttribute("class","btn btn-primary btn-xs");
    buttonEditar.setAttribute("title","Editar");
    var spanElementPencil = document.createElement("span");
    spanElementPencil.setAttribute("class","glyphicon glyphicon-pencil");
    buttonEditar.appendChild(spanElementPencil);
    actionElement.appendChild(buttonEditar);

    var buttonOk = document.createElement("button");
    buttonOk.setAttribute("type","button");
    buttonOk.setAttribute("class","btn btn-success btn-xs");
    buttonOk.setAttribute("title","Ok");
    var spanElementOk = document.createElement("span");
    spanElementOk.setAttribute("class","glyphicon glyphicon-ok");
    buttonOk.appendChild(spanElementOk);
    actionElement.appendChild(buttonOk);

    var buttonBorrar = document.createElement("button");
    buttonBorrar.setAttribute("type","button");
    buttonBorrar.setAttribute("class","btn btn-danger btn-xs");
    buttonBorrar.setAttribute("title","Borrar");
    var spanElementBorrar = document.createElement("span");
    spanElementBorrar.setAttribute("class","glyphicon glyphicon-trash");
    buttonBorrar.appendChild(spanElementBorrar);
    actionElement.appendChild(buttonBorrar);


    
    return actionElement;




    // <div class="action">
    // //                                         <button type="button" class="btn btn-primary btn-xs" title="Edit">
    // //                                             <span class="glyphicon glyphicon-pencil"></span>
    // //                                         </button>
    // //                                         <button type="button" class="btn btn-success btn-xs" title="Approved">
    // //                                             <span class="glyphicon glyphicon-ok"></span>
    // //                                         </button>
    // //                                         <button type="button" class="btn btn-danger btn-xs" title="Delete">
    // //                                             <span class="glyphicon glyphicon-trash"></span>
    // //                                         </button>
    // //                                     </div>
}


function crearContenedorInfoComentario(comentario){
    var contenedorElement = document.createElement("div");
    contenedorElement.setAttribute("class","col-xs-10 col-md-11");
    
    //crear usuario y fecha
    var userNameAndDateELement = crearUserNameAndDateELement(comentario);
    contenedorElement.appendChild(userNameAndDateELement);

    //crear texto comentario
    var texto = crearTextoCommentElement (comentario.texto);
    contenedorElement.appendChild(texto);

    //crear botones
    var botonesElement = crearBotonesElement();
    contenedorElement.appendChild(botonesElement);

    return contenedorElement;
}

function crearElementoComentario(comentario){
    var listGroupItem = document.createElement("li");
    listGroupItem.setAttribute("class","list-group-item");
    
    var rowItem = document.createElement("div");
    rowItem.setAttribute("class","row");
    var fotoElement = crearFotoCommentElement();
    
    var contenedorInfoComentario = crearContenedorInfoComentario(comentario);
    



    rowItem.appendChild(fotoElement);
    rowItem.appendChild(contenedorInfoComentario);

    listGroupItem.appendChild(rowItem);
    


    return  listGroupItem;



    // <li class="list-group-item">
    //                             <div class="row">
    //                                 <div class="col-xs-2 col-md-1">
    //                                     <img src="http://placehold.it/80" class="img-circle img-responsive" alt="" />
    //                                 </div>
    //                                 <div class="col-xs-10 col-md-11">
    //                                     <div>
    //                                         <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">Cool Sign Up</a>
    //                                         <div class="mic-info">
    //                                             By: <a href="#">Bhaumik Patel</a> on 11 Nov 2013
    //                                         </div>
    //                                     </div>
    //                                     <div class="comment-text">
    //                                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    //                                         nibh
    //                                         euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
    //                                         enim
    //                                     </div>
    //                                     <div class="action">
    //                                         <button type="button" class="btn btn-primary btn-xs" title="Edit">
    //                                             <span class="glyphicon glyphicon-pencil"></span>
    //                                         </button>
    //                                         <button type="button" class="btn btn-success btn-xs" title="Approved">
    //                                             <span class="glyphicon glyphicon-ok"></span>
    //                                         </button>
    //                                         <button type="button" class="btn btn-danger btn-xs" title="Delete">
    //                                             <span class="glyphicon glyphicon-trash"></span>
    //                                         </button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </li>

}



function addComment(){
    var texto = document.getElementById("nuevoComentario").innerHTML;

    //cojer usuario y token y peliculaId de localstorage
    var session = leerDeLocalStorage("session");
    var sessionObject = JSON.parse(session);
   
    var peliId = leerDeLocalStorage("peliculaId");
    // var peliculaId = JSON.parse(peliId);

    var comentarioNuevo = new NuevoComentario(sessionObject.nombre,texto,sessionObject.token, peliId)


    //llamar post
    llamarApiAddComment(comentarioNuevo);

}


//********************************   REDIRECCIONES   *********************************************/

function redireccionarAHomepage() {
    window.location = "homepage.html";
}


function redireccionarAPeliculaPage (){
    window.location = "pelicula.html";

}

// **************************       LLAMADAS A LA API       ***********************************

const URISession = "http://10.1.2.10:8081/cfticionic/usuariocftic";
const URIfotosAPI = "http://10.1.2.10:8081/cfticionic/fotos";
const URIFOTOAPI =  "http://10.1.2.10:8081/cfticionic/foto"  // http://10.1.2.10:8081/cfticionic/foto?key=CQOYQYTQ3CP3&idfoto=3
const URICommentsAPI =  "http://10.1.2.10:8081/cfticionic/comentarios/foto" // http://10.1.2.10:8081/cfticionic/comentarios/foto?key=CQOYQYTQ3CP3&idfoto=5
const URINuevoComentario =  "http://10.1.2.10:8081/cfticionic/comentario"// BODY { "nombre": "alumno10", "texto": "la verdad, me ha gustado aunque el final un poco feo", "token": "CQOYQYTQ3CP3", "idfoto": 5}


var request;
var request2;


// SERVICIO 1 LOGIN
// POST http://10.1.2.10:8081/cfticionic/usuariocftic CUERPO {"nombre":"alumno10", "pwd":"alumno10"}

// RESPUESTA 200

// {"nombre":"alumno16","pwd":"alumno16","token":"CQOYQYTQ3CP3"}

// Otros códigos de respuesta:

// 400 Bad Request (errores de validación, petición incorrecta) 500 Internal Server Error (algún problema en la generación del usuario)

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

// SERVICIO 2 OBTENER TODAS LAS FOTOS
// GET http://10.1.2.10:8081/cfticionic/fotos?key=CQOYQYTQ3CP3

// RESPUESTA 200 OK

// [{"idfoto":0,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/adios.jpg"},{"idfoto":1,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/dinero.jpg"},{"idfoto":2,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/frozen.jpg"},{"idfoto":3,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/gigolo.jpg"},{"idfoto":4,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/joker.jpg"},{"idfoto":5,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/ladronas.jpg"},{"idfoto":6,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/lluvia.jpg"},{"idfoto":7,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/malefica.jpg"},{"idfoto":8,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/rico.jpg"},{"idfoto":9,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/terminator.jpg"}]

// Otros códigos de respuesta: 403 Prohibido (clave ausente o incorrecta)

function llamarApiFotos() {
    var uri = URIfotosAPI;
    //cojer key de session de localstorage
    var session = leerDeLocalStorage("session");
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

// SERVICIO 3 OBTENER INFORMACIÓN DE UNA FOTO
// GET http://10.1.2.10:8081/cfticionic/foto?key=CQOYQYTQ3CP3&idfoto=3

// RESPUESTA 200 OK {"idfoto":3,"ruta":"http://10.1.2.10:8081/cfticionic/fotos/frozen.jpg"}

// Otros códigos de respuesta:

// 400 BAD Request (el id de la foto está fuera de rango) 403 Prohibido (La credencial key no es válida)


function llamarApiFoto(fotoId){
    var uri = URIFOTOAPI;
    //cojer key de session de localstorage
    var session = leerDeLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token + "&idfoto=" + fotoId;

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



// SERVICIO 4 PUBLICAR UN COMENTARIO (comentarios entre 2 y 400 caracteres)
// POST http://10.1.2.10:8081/cfticionic/comentario BODY { "nombre": "alumno10", "texto": "la verdad, me ha gustado aunque el final un poco feo", "token": "CQOYQYTQ3CP3", "idfoto": 5}

// RESPUESTA 201 CREADO

// {"nombre":"alumno10","texto":"la verdad, me ha gustado aunque el final un poco feo","idcomentario":66,"fecha":1574598838203}

// Otros códigos de respuesta:

// 400 BAD Request (falta algún parámetro o es incorrecto/fuera de rango) 403 Prohibido (credenciales incorrectas)


function llamarApiAddComment(nuevoComentario) {
    var uri = URINuevoComentario;
    //cojer sesesion

    request = new XMLHttpRequest();
    request.onreadystatechange = procesarEventosRecibir;
    request.open('POST', uri, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(nuevoComentario));
}
function procesarEventosRecibir() {
    if (request.readyState == 4) {
        if (request.status == 200) { //login exitoso
            var cuerpo = request.responseText;
            var sesion = JSON.parse(cuerpo)

            //Añadir comentario al final (o principio)  
            
            redireccionarAHomepage();

        } else {
            console.log("error " + request.status);
        }
    }
}


// SERVICIO 5 OBTENER LOS COMENTARIOS DE UNA FOTO
// GET http://10.1.2.10:8081/cfticionic/comentarios/foto?key=CQOYQYTQ3CP3&idfoto=5

// RESPUESTA 200 OK

// [{"id":66,"autor":"alumno10","idfoto":5,"momento":1574598838203,"texto":"la verdad, me ha gustado aunque el final un poco feo"},{"id":67,"autor":"alumno10","idfoto":5,"momento":1574596744100,"texto":"a la dirección artística, pá matarla"}]

// Otros códigos de respuesta:

// 204 Sin Contenido (La foto solicitada no tiene ningún comentario asociado) 400 BAD Request (falta algún parámetro) 403 Prohibido (La credencial key no es válida)


function llamarApiComments(fotoId){
    var uri = URICommentsAPI;
    //cojer key de session de localstorage
    var session = leerDeLocalStorage("session");
    var sessionObject = JSON.parse(session);
    
    uri = uri + "?key=" + sessionObject.token + "&idfoto=" + fotoId;

    request2 = new XMLHttpRequest();
    request2.onreadystatechange = procesarPeliculaComments;
    request2.open('GET', uri, true);
    request2.send(null);

}

function procesarPeliculaComments() {
    if (request2.readyState == 4) {
        if (request2.status == 200) { //exito
            var cuerpo = request2.responseText;
            var comments = JSON.parse(cuerpo);
            mostrarPeliculaComments(comments);
        } else {
            console.log("error " + request2.status);
        }
    }
}





//*************Local storage****************
function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}

function leerDeLocalStorage(clave) {
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

