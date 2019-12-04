import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private static readonly letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
  private numeroDni:number;
  private letraDni:string; 
  private numLetras:number;

  constructor() {
    this.numLetras = HomePage.letrasValidas.length;
  }

  calcularLetra(){
    console.log(this.letraDni);
    let resto = this.numeroDni % this.numLetras;
    this.letraDni = HomePage.letrasValidas[resto];
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
