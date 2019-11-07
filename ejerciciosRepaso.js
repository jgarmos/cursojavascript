
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


module.exports = {esPar,esMayorDeEdad};