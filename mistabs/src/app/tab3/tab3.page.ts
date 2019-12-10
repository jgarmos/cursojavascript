import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  srcImg:string;

  constructor(public platform:Platform) {
    console.log("cargando pagina tab3");
    console.log("es android?: ", + this.platform.is("desktop"));
    //saber en que plataforma estoy
    console.log(this.platform);

    if (platform.is("android")){
      this.srcImg = "https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png";
    }
    if (platform.is("desktop")){
      this.srcImg = "http://pngimg.com/uploads/monitor/laptop_PNG5888.png";
      
    }
    if (platform.is("iphone")){
      this.srcImg = "https://pngimage.net/wp-content/uploads/2018/06/logo-apple-iphone-png-3.png";
    }
    

  }
}



