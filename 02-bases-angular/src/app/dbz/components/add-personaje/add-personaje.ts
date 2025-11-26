import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-add-personaje',
  // imports: [],
  templateUrl: './add-personaje.html',
  styleUrl: './add-personaje.css',
  standalone:false
})
export class AddPersonajeComponet {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();


  public personaje: Personaje={
    nombre: '',
    fuerza: 0
  }
  public addPersonaje(): void{
    console.log(this.personaje);
    if (this.personaje.nombre.length===0) return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje.nombre= '';
    this.personaje.fuerza=0;
  }

}
