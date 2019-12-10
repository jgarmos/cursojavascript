
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private static readonly letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
  numeroDni:number;
  letraDni:string; 
  numLetras:number;

  constructor() {
    this.numLetras = Tab1Page.letrasValidas.length;
  }

  calcularLetra(){
    console.log(this.letraDni);
    let resto = this.numeroDni % this.numLetras;
    this.letraDni = Tab1Page.letrasValidas[resto];
    return this.letraDni;
    console.log(this.numeroDni);
    console.log(this.letraDni);
  }

}


// function calcularLetraDniPrograma(){
//   //obtener el numero de la caja
//   var num = document.getElementById("dni").value;
//   var letraExtranjero = document.getElementById("letraExtranjero").value;
//   var fullDni = letraExtranjero + num;
  
//   //calcular la letra
//   var letra = calcularLetraDni(fullDni);

//   //mostrar la letra
//   alert("la letra de su dni es " + letra);
// }


// function calcularsLetraDni(fullDni) {

//   var letraExtranjero = fullDni[0];
//   var num = fullDni
//   if (esDniExtranjero(fullDni)) {
//       num = fullDni.substr(1, 8)
//       switch (letraExtranjero) {
//           case 'X':
//               num = 0 + num;
//               break;
//           case 'Y':
//               num = 1 + num;
//               break;
//           case 'Z':
//               num = 2 + num;
//               break;
//       }
//   }

//   var resto = num % numLetras;
//   var letra = letras[resto];
//   return letra;
// }
