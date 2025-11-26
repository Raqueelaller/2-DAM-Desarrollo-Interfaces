import { Component} from '@angular/core';
import { HeroesModule } from "../../heroes/heroes.module";
import { AddPersonajeComponet } from "../components/add-personaje/add-personaje";
import { ListaComponent } from '../components/lista/lista';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
  // imports: [ListaComponent, AddPersonajeComponet]
  standalone:false
})

export class MainPageComponent{

  public personajes: Personaje[]=[
    {
    nombre:'Goku',
    fuerza: 1000
  },
  {
    nombre: 'Vegeta',
    fuerza: 800
  },{
    nombre: 'Luffy',
    fuerza: 500000
  },
  {
    nombre: 'Naruto',
    fuerza: 6000
  },
  {
    nombre:'Sasuke',
    fuerza:58565
  },{
    nombre: 'Chopper',
    fuerza:100
  },
  {
    nombre:'Nico Robin',
    fuerza:5999
  }


];

public onMetodoNewPersonaje(personaje: Personaje){
  console.log('Main');
  console.log(personaje);


}


}
