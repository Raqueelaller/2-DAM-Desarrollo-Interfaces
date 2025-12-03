import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListaComponents } from '../../../heroes/components/lista/lista';
import { Personaje } from '../../interfaces/personaje';
import{v4 as uuid} from 'uuid';
@Component({
  selector: 'app-lista',
  // imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone:false
})
export class ListaComponent {




  @Input()
  public listaPersonajes: Personaje[]=[
    {
      id:uuid(),
      nombre: 'Bulma',
      fuerza:10
    }


  ]

 @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  public eliminarPersonaje(id: string): void {
    this.onDeletePersonaje.emit(id);
  }

}
