import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagenSrc: string;

  peso: number;
  altura: number;
  imcIndex: number;
  imcDescriptivo: string;

  constructor() {
    this.imagenSrc = "";
  }

  calcularIMC() {
    this.imcIndex = ((Math.round(this.peso / Math.pow(this.altura, 2) * 10) / 10)); //redondea a un decimal


      // this.imcIndex= ((Math.round(this.peso / Math.pow(this.altura, 2) * 10) / 10));
    this.calcularIMCdescriptivo();
    this.asignarIMCImagen();

    console.log("peso es: " + this.peso);
    console.log("altura es: " + this.altura);
    console.log("IMC: " + this.imcIndex);
  }

  private calcularIMCdescriptivo() {
    if (this.imcIndex < 16) {
      this.imcDescriptivo = "Desnutrido";
    } else if ((this.imcIndex >= 16) && (this.imcIndex < 18)) {
      this.imcDescriptivo = "Delgado";
    } else if ((this.imcIndex >= 18) && (this.imcIndex < 25)) {
      this.imcDescriptivo = "Ideal";
    } else if ((this.imcIndex >= 25) && (this.imcIndex < 31)) {
      this.imcDescriptivo = "Sobrepeso";
    } else this.imcDescriptivo = "Obeso";

  }

  private asignarIMCImagen() {
    var src;
    if (this.imcIndex < 16) {
      this.imagenSrc = "https://previews.123rf.com/images/lenm/lenm0811/lenm081100164/3902739-ni%C3%B1o-desnutrido-con-saturaci%C3%B3n-camino.jpg";
    } else if ((this.imcIndex>= 16) && (this.imcIndex< 18)) {
      this.imagenSrc = "https://comps.canstockphoto.es/divertido-tipo-delgado-dibujo_csp6023984.jpg";
    } else if ((this.imcIndex >= 18) && (this.imcIndex < 25)) {
      this.imagenSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpNW0F1fjgGrGYPQMRPUHsVKomLXBg2Od_k2OCJMYPxgkbEXSOCyedcWq&s";
    } else if ((this.imcIndex >= 25) && (this.imcIndex < 31)) {
      this.imagenSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzULOn3I6zcN0qmab30fBy841oDkqqtcjAEVuI6Xx5C8tscAlHLexhq78fPA&s";
    } else if ((this.imcIndex >= 25) && (this.imcIndex < 31)) {
      this.imagenSrc = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";
    } else this.imagenSrc = "https://tstoaddicts.files.wordpress.com/2015/11/kingsizehomervictory.png";

  }
}

