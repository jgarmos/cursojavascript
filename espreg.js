const EXPRESION_REGULAR_USUARIO_MAIL = /^\w{6,}$/;
const EXPRESION_REGULAR_EMAIL = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const EXPRESION_REGULAR_ANUNCIO = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const EXPRESION_REGULAR_TELEFONO = /^\+\d{7,15}$/;
const EXPRESION_REGULAR_PWD = /^\w{6,15}$/; 

var email = "valerianomoreno@gmail.com"
var patron = new RegExp(EXPRESION_REGULAR_EMAIL);
var email_ok = patron.test(email);
if (email_ok){
    console.log ("Email correcto");
} else {
    console.log ("Email incorrecto");
}
