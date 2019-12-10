// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {

//   constructor() {}

// }



import { IMC } from './IMC';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  imc:IMC

  arrayImc:Array<IMC>;

  constructor() {
    this.imc = new IMC();
    
    this.arrayImc = new Array<IMC>();
  }
  limpiar(){
    this.arrayImc = [];
  }
  calcularIMC() {
  
    let imcAux = new IMC();
    imcAux.peso = this.imc.peso;
    imcAux.altura = this.imc.altura;

    imcAux.imcIndex = ((Math.round(this.imc.peso / Math.pow(this.imc.altura, 2) * 10) / 10)); //redondea a un decimal



      // this.imcIndex= ((Math.round(this.peso / Math.pow(this.altura, 2) * 10) / 10));
    imcAux.imcDescriptivo = this.calcularIMCdescriptivo(imcAux.imcIndex);
    imcAux.imgSrc = this.asignarIMCImagen(imcAux.imcIndex);

    this.arrayImc.push(imcAux);

    console.log("peso es: " + imcAux.peso);
    console.log("altura es: " + imcAux.altura);
    console.log("IMC: " + imcAux.imcIndex);
    console.log("texto: " + imcAux.imcDescriptivo);
    console.log("src: " + imcAux.imgSrc);
  }

  // public ordenarPorPeso(){
  //   this.arrayImc.sort(function(a,b){
  //     return (a.peso - b.peso)
  //   });
  // }

  // public ordenarPorAltura(){
  //   this.arrayImc.sort(function(a,b){
  //     return (a.altura - b.altura)
  //   });
  // }
  // public ordenarPorIndex(){
  //   this.arrayImc.sort(function(a,b){
  //     return (a.imcIndex - b.imcIndex)
  //   });
  // }
  public ordenarPorPeso(){
    this.arrayImc.sort( (a,b) => a.peso - b.peso );
  }

  public ordenarPorAltura(){
    this.arrayImc.sort( (a,b) => a.altura - b.altura );
  }
  public ordenarPorIndex() {
    this.arrayImc.sort( (a,b) => a.imcIndex - b.imcIndex );
  }

  private calcularIMCdescriptivo(imcIndex:number):string {
    let texto;
    if (imcIndex< 16) {
      texto = "Desnutrido";
    } else if ((imcIndex >= 16) && (imcIndex < 18)) {
      texto = "Delgado";
    } else if ((imcIndex >= 18) && (imcIndex < 25)) {
      texto = "Ideal";
    } else if ((imcIndex >= 25) && (imcIndex   < 31)) {
      texto = "Sobrepeso";
    } else texto = "Obeso";
    return texto;
  }

  private asignarIMCImagen(imcIndex:number):string {
    var src;
    if (imcIndex < 16) {
      src= "https://previews.123rf.com/images/lenm/lenm0811/lenm081100164/3902739-ni%C3%B1o-desnutrido-con-saturaci%C3%B3n-camino.jpg";
    } else if ((imcIndex>= 16) && (imcIndex< 18)) {
      src = "https://comps.canstockphoto.es/divertido-tipo-delgado-dibujo_csp6023984.jpg";
    } else if ((imcIndex >= 18) && (imcIndex < 25)) {
      src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpNW0F1fjgGrGYPQMRPUHsVKomLXBg2Od_k2OCJMYPxgkbEXSOCyedcWq&s";
    } else if ((imcIndex>= 25) && (imcIndex < 31)) {
      src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzULOn3I6zcN0qmab30fBy841oDkqqtcjAEVuI6Xx5C8tscAlHLexhq78fPA&s";
    } else if ((imcIndex >= 25) && (imcIndex   < 31)) {
      src = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";
    } else src = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";
    return src;
  }



}

