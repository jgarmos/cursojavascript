import { LoginServiceService } from './../login-service.service';
import { Login } from './login';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers: [LoginServiceService]
})
export class FormularioPage implements OnInit {

  login: Login;

  constructor(private loginService: LoginServiceService) {
    this.login = new Login();
  };

  acceder() {

    this.loginService.postLogin(this.login).subscribe(
      resp => {
        let cuerpo:HttpResponse<Object>;
        cuerpo = resp as HttpResponse<Object>
        console.log("ha ido bien" + cuerpo.status);
        console.log("ha ido bien" + cuerpo.body);

      },
      error => console.log("error" + error)
    );

  }
  ngOnInit() {
  }

}
