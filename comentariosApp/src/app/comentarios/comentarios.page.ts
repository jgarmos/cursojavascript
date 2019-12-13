import { NuevoComentario } from './NuevoComentario';
import { HttpResponse } from '@angular/common/http';
import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import * as moment from 'moment';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
  providers:[PeliculasService]
})
export class ComentariosPage implements OnInit {

  comentarios:Array<Comentario>;
  textoComentario:string;
  tokenUser:string;

  constructor(private peliculasService:PeliculasService) {

    
   }

   addCommentario(){
    
      let nuevoComentario = new NuevoComentario();
      nuevoComentario.texto = this.textoComentario;
      nuevoComentario.token = this.leerTokenDeLocalStorage();
      nuevoComentario.idfoto = this.leerPeliSeleccionadaDeLocalStorage(); 
      nuevoComentario.nombre = this.leerNombreDeLocalStorage();


      this.peliculasService.postComentario(nuevoComentario).subscribe(
        resp => {

          // si exito volvemos a cargar todos los comentarios
          this.listarComentarios();
        },
        error => {

        }
      );
   }
   

   listarComentarios(){
    this.tokenUser = this.leerTokenDeLocalStorage();
    let peliId = this.leerPeliSeleccionadaDeLocalStorage();
    this.peliculasService.getComentarios(this.tokenUser,peliId).subscribe(
      resp =>{
        let respHttp = resp as HttpResponse<Array<Comentario>>;
        this.comentarios = respHttp.body;
      },
      error =>{

      }
    );
    console.log(this.comentarios)

   }
   mostrarFechaFormateada(momento:number):string{
    let date = moment(momento).format('MMMM Do YYYY, h:mm:ss a');
    return date;
   }

    //TODO: mover a una carpeta coomon
   leerTokenDeLocalStorage():string{
    let login:Login = JSON.parse( localStorage.getItem("credenciales"));  
    console.log(login);
    return login.token;
  }
  leerNombreDeLocalStorage():string{
    let login:Login = JSON.parse( localStorage.getItem("credenciales"));  
    console.log(login);
    return login.nombre;
  }


  leerPeliSeleccionadaDeLocalStorage():number{
    let peliId:number = JSON.parse( localStorage.getItem("peliSeleccionada"));  

    return peliId;
  }

  ngOnInit() {
    this.listarComentarios();
  }

  ionViewDidLoad(){
    window.setInterval(this.listarComentarios, 500);
   
  }

}
