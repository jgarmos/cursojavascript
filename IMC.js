
function calcularIMCProgram(){
    // extraer datos
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    // calcular IMC
    var IMC = calcularIMC(peso,altura);
    var text = devolverIMCdescriptivo(IMC);
    
    // mostrar resultado
    document.getElementById("resultadoIMC").innerHTML = "su indice IMC es " + IMC + " equivalente a " + text;
    
    //mostrar imagen 

    var imgDiv = document.getElementById("div_imagen");
    
    if(imgDiv.childElementCount === 1){
        imgDiv.
    }

    var img = document.createElement("img");    //creo una elemento imagen
    img.src = devolverIMCFoto(IMC);             //le añado el link de la foto
    
    // imgDiv.removeChild(img);                    // eliminar imagen si esta creada
    imgDiv.appendChild(img);                    // añadir imagen como hijo del div
    
}

function calcularIMC(pesoKg,alturaM){
     return ((Math.round(pesoKg/Math.pow(alturaM,2)*10)/10)); //redondea a un decimal
}

function devolverIMCdescriptivo(IMC){
    var imcDescriptivo;
    if(IMC < 16 ){
        imcDescriptivo = "Desnutrido";
    }else if((IMC >= 16) && (IMC < 18)) {
        imcDescriptivo = "Delgado";
    }else if((IMC >= 18) && (IMC < 25)){
        imcDescriptivo = "Ideal";
    }else if ((IMC >= 25) && (IMC < 31)){
        imcDescriptivo = "Sobrepeso";
    }else imcDescriptivo = "Obeso";

    return imcDescriptivo;
}
function devolverIMCFoto(IMC){
    var src;
    if(IMC < 16 ){
        src = "https://previews.123rf.com/images/lenm/lenm0811/lenm081100164/3902739-ni%C3%B1o-desnutrido-con-saturaci%C3%B3n-camino.jpg";
    }else if((IMC >= 16) && (IMC < 18)) {
        src = "https://comps.canstockphoto.es/divertido-tipo-delgado-dibujo_csp6023984.jpg";
    }else if((IMC >= 18) && (IMC < 25)){
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpNW0F1fjgGrGYPQMRPUHsVKomLXBg2Od_k2OCJMYPxgkbEXSOCyedcWq&s";
    }else if ((IMC >= 25) && (IMC < 31)){
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzULOn3I6zcN0qmab30fBy841oDkqqtcjAEVuI6Xx5C8tscAlHLexhq78fPA&s";
    }else if ((IMC >= 25) && (IMC < 31)){
        src = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";
    } else src = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";

    return src;
}

module.exports = {calcularIMC,devolverIMCdescriptivo};





