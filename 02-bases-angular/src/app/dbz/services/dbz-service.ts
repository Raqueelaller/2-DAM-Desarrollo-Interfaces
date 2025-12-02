import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

      public personajes: Personaje[]=[
    {
    id:uuid(),
    nombre:'Goku',
    fuerza: 1000
  },
  {
    id:uuid(),
    nombre: 'Vegeta',
    fuerza: 800
  },{
    id:uuid(),
    nombre: 'Luffy',
    fuerza: 500000
  },
  {
    id:uuid(),
    nombre: 'Naruto',
    fuerza: 6000
  },
  {
    id:uuid(),
    nombre:'Sasuke',
    fuerza:58565
  },{
    id:uuid(),
    nombre: 'Chopper',
    fuerza:100
  },
  {
    id:uuid(),
    nombre:'Nico Robin',
    fuerza:5999
  }


];

public onMetodoNewPersonaje(personaje: Personaje){
  // sin spread
  // personaje.id=uuid();
  // this.personajes.push(personaje)

  // con spread
  const newPersonaje:Personaje = {id: uuid(),...personaje}
  this.personajes.push(newPersonaje);


}


public onMetodoDeletePersonaje(posicion:number):void{


  this.personajes.splice(posicion,1);
}


}
