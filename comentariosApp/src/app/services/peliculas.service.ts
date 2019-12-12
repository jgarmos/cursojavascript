import { Injectable } from '@angular/core';
import { Login } from '../login/login';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NuevoComentario } from '../comentarios/NuevoComentario';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private httpClient: HttpClient) { }

  private static readonly SERVICIO_POST_LOGIN = "http://10.1.2.10:8081/cfticionic/usuariocftic";
  private static readonly SERVICIO_GET_PELICULAS = "http://10.1.2.10:8081/cfticionic/fotos?"; //http://10.1.2.10:8081/cfticionic/fotos?key=CQOYQYTQ3CP3
  private static readonly SERVICIO_GET_COMENTARIOS = "http://10.1.2.10:8081/cfticionic/comentarios/foto"; //http://10.1.2.10:8081/cfticionic/comentarios/foto?key=CQOYQYTQ3CP3&idfoto=5
  private static readonly SERVICIO_POST_COMENTARIOS = "http://10.1.2.10:8081/cfticionic/comentario";
  

  postLogin(login: Login): Observable<object> {
    let dir_serv: string = PeliculasService.SERVICIO_POST_LOGIN;
    let str_login: string = JSON.stringify(login);//Serializar
    console.log("Enviado..." + str_login);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post
      (dir_serv, str_login, { headers: headers, observe: "response" });
  }

  postComentario(comentario:NuevoComentario): Observable<object> {
    let dir_serv: string = PeliculasService.SERVICIO_POST_COMENTARIOS;
    let str_comentario: string = JSON.stringify(comentario);//Serializar
    console.log("Enviado..." + str_comentario);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post
      (dir_serv, str_comentario, { headers: headers, observe: "response" });
  }
  /**
   * Consume el servicio de lista de peliculas 
   * @param token clave para consumir le servicio
   */

  getPeliculas(token: string): Observable<object> {

    let urlGetPeliculas: string = PeliculasService.SERVICIO_GET_PELICULAS + "key=" + token;

    return this.httpClient.get(urlGetPeliculas, { observe: "response" });

  }
  /**
   * Consume el servicio de lista de peliculas 
   * @param token clave para consumir le servicio
   */

  getComentarios(token: string,idfoto:number): Observable<object> {

    let urlGetComentarios: string = PeliculasService.SERVICIO_GET_COMENTARIOS+ "?key=" + token + "&idfoto=" + idfoto ;

    return this.httpClient.get(urlGetComentarios, { observe: "response" });

  }


}







// import { Login } from './formulario/login';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class LoginServiceService {
//   //desde aqui nos comunicamos con el servidor
//   constructor(private httpClient: HttpClient) { }
//   readonly URI: string = "http://10.1.2.10:8081/cfticionic/usuariocftic";

//   private static readonly SERVICIO_POST_LOGIN = "http://10.1.2.10:8081/cfticionic/usuariocftic";

//   postLogin(login: Login): Observable<object> {
//     let dir_serv: string = LoginServiceService.SERVICIO_POST_LOGIN;
//     let str_login: string = JSON.stringify(login);//Serializar
//     console.log("Enviado..." + str_login);
//     let headers = new HttpHeaders().set('Content-type', 'application/json');

//     return this.httpClient.post
//       (dir_serv, str_login, { headers: headers, observe: "response" });
//   }
// }
