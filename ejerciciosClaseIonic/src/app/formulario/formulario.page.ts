import { NavController } from '@ionic/angular';
import { LoginServiceService } from './../login-service.service';
import { Login } from './login';
import { Component, OnInit } from '@angular/core';
import { HttpResponse, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers: [LoginServiceService]
})
export class FormularioPage implements OnInit {

  login: Login;

  constructor(private loginService: LoginServiceService, public nc : NavController) {
    this.login = new Login();
  };

  gestionarRespuesta(loginval:Login){
    console.log("usuario: " + loginval.nombre);
    console.log("pass: " + loginval.pwd);
    console.log("token: " + loginval.token);

  }

  acceder() {

    this.loginService.postLogin(this.login).subscribe(
      resp => {
        let cuerpo:HttpResponse<Object>;
        cuerpo = resp as HttpResponse<Object>
        let loginval:Login = cuerpo.body as Login;
        

        //TODO:
        //guardar credenciales
        let loginstr = JSON.stringify(loginval);
        localStorage.setItem("credenciales", loginstr);
        //direccionar pagina
        this.nc.navigateForward("listapelis");
        

        console.log("ha ido bien" + cuerpo.status);
        this.gestionarRespuesta(loginval);

      },
      error => console.log("error" + error)
    );

  }
  ngOnInit() {
  }

}
