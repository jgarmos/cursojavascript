import { SlideOptions } from './slide-options';
import { NavController, LoadingController } from '@ionic/angular';
import { HttpResponse } from '@angular/common/http';
import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { Login } from '../login/login';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  providers:[PeliculasService]
})
export class PeliculasPage implements OnInit {

  listaPeliculas: Array<Pelicula>;
  sessionToken:string;

  slideOptions:SlideOptions;

  constructor(private peliculasService:PeliculasService, private nc:NavController, private loadingController:LoadingController) { 
    this.slideOptions = new SlideOptions();
    
    this.listaPeliculas = new Array<Pelicula>();
    this.sessionToken = this.leerTokenDeLocalStorage();
    this.presentLoading();
    this.listarPeliculas();

    

  }

  listarPeliculas(){
    this.peliculasService.getPeliculas(this.sessionToken).subscribe(
      resp => { 
        // let listaObjetosResp = resp as Array<object>
        
        let httpresp = resp as HttpResponse<Array<Pelicula>>;
        this.listaPeliculas = httpresp.body;

        this.listaPeliculas.map( peli => {
          console.log(peli.idfoto)
        } );

        console.log(this.listaPeliculas);
      },
      error => {
        console.log("error")
      });
  }

  peliTocada(pelicula:Pelicula){
    localStorage.setItem("peliSeleccionada", pelicula.idfoto.toString());
    this.nc.navigateForward("comentarios"); 
  }


  leerTokenDeLocalStorage():string{
    let login:Login = JSON.parse( localStorage.getItem("credenciales"));  
    console.log(login);

    return login.token;

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }


  ngOnInit() {
  }

}
