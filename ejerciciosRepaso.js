
// ************ Ejercicio 1 ********************

function calcularEsPar(){
  var num = document.getElementById("esParInput").value;
  console.log(num);
  var text;
  if (esPar(num)){
    text = "El numero " + num + " es par";
  }   else{
    text = "El numero " + num + " es impar";
  }
  document.getElementById("esParRespuesta").innerHTML = text;

}

function esPar(num){
  return (num % 2 === 0)
}
//***************************** Ejercicio 2 *******************

function calcularEsMayorDeEdad(){
  var edad = document.getElementById("mayorEdadInput").value;
  var text;
  if (esMayorDeEdad(edad)){
    text = "Eres mayor de edad, Ya puedes conducir Y beber alcohol (pero no a la vez)";
  }   else{
    text = "Eres menor de edad, todavia te toca esperar para entrar a la disco"
  }
  document.getElementById("mayorEdadRespuesta").innerHTML = text;
}

function esMayorDeEdad(edad){
    return (edad > 17);
}


//***************************** Ejercicio 3 *******************
fucntion calcularNota(not) {
  var nota = Math.round(not);
  var texto;
  if (nota < 5){
    texto = "Suspenso";
  } else if( nota >= 5 && nota < 6 ){
    texto = "Aprobado";
  } else if( nota >= 6 && nota < 7 ){
    texto = "Bien";
  } else if( nota >= 8 && nota < 9 ){
    texto = "Notable";
  } else if( nota >= 9 && nota <=10 ){
    texto = "Sobresaliente";
  return texto;
}



//*****************************Ejercicio 4 **********************/

module.exports = {esPar,esMayorDeEdad};