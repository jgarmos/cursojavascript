import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Login } from './login';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [PeliculasService]
})
export class LoginPage implements OnInit {

  login: Login;

  constructor(private peliculasService: PeliculasService, public nc: NavController, private alertController: AlertController) {
    this.login = new Login();
  }

  presentAlertPromesas(error:HttpErrorResponse) {
    this.alertController.create({
      header: 'ERROR Promesa ' + error.status,
      subHeader: 'Subtitle',
      message: error.statusText,
      buttons: ['OK']
    }).then(ventana => ventana.present().then(() => console.log("ventana mostrada")));

  }

  async presentAlert(error:HttpErrorResponse) {
    const alert = await this.alertController.create({
      header: 'ERROR ' + error.status,
      subHeader: 'Subtitle',
      message: error.statusText,
      buttons: ['OK']
    });
    await alert.present();
  } 

  acceder() {

    this.peliculasService.postLogin(this.login).subscribe(
      resp => {
        let cuerpo: HttpResponse<object>;
        cuerpo = resp as HttpResponse<object>;
        let validLogin: Login = cuerpo.body as Login;

        let loginstr = JSON.stringify(validLogin);

        localStorage.setItem("credenciales", loginstr);
        //direccionar pagina
        this.nc.navigateForward("peliculas");
      },
      error => {
        
        this.presentAlert(error);  
        //this.presentAlertPromesas(error);  
      }
    );
  }


  ngOnInit() {
  }

}
