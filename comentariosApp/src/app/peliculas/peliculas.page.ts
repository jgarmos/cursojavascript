import { HttpResponse } from '@angular/common/http';
import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { Login } from '../login/login';
import { Foto } from './foto';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  providers:[PeliculasService]
})
export class PeliculasPage implements OnInit {

  listaPeliculas: Array<Pelicula>;
  sessionToken:string;

  constructor(private peliculasService:PeliculasService) { 
    //this.listaPeliculas = new Array<Pelicula>();
    this.sessionToken = this.leerTokenDeLocalStorage();
    this.listarPeliculas();
    
  }

  listarPeliculas(){
    this.peliculasService.getPeliculas(this.sessionToken).subscribe(
      resp => { 
        // let listaObjetosResp = resp as Array<object>
        let httpresp = resp as HttpResponse<Array<Pelicula>>;
        this.listaPeliculas = httpresp.body;

        console.log(this.listaPeliculas);
      });
  }


  leerTokenDeLocalStorage():string{
    let login:Login = JSON.parse( localStorage.getItem("credenciales"));  
    console.log(login);

    return login.token;

  }
  ngOnInit() {
  }

}
