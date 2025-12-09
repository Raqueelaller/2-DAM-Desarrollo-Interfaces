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

public addPersonaje(personaje: Personaje){
    personaje.id=uuid();
    this.personajes.push(personaje);
}

public deletePersonaje(id: string): void {
    this.personajes = this.personajes.filter(p => p.id !== id);
    console.log("id del personaje eliminado"+id)
}

}

