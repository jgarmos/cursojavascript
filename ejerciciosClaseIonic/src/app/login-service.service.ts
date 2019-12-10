
import { Login } from './formulario/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //desde aqui nos comunicamos con el servidor
  constructor(private httpClient: HttpClient) { }
  readonly URI: string = "http://10.1.2.10:8081/cfticionic/usuariocftic";

  private static readonly SERVICIO_POST_LOGIN = "http://10.1.2.10:8081/cfticionic/usuariocftic";

  postLogin(login: Login): Observable<object> {
    let dir_serv: string = LoginServiceService.SERVICIO_POST_LOGIN;
    let str_login: string = JSON.stringify(login);//Serializar
    console.log("Enviado..." + str_login);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post
      (dir_serv, str_login, { headers: headers, observe: "response" });
  }
}
