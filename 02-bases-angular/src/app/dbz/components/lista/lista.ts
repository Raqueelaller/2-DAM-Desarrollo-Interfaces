import { Component, Input } from '@angular/core';
import { ListaComponents } from '../../../heroes/components/lista/lista';
import { Personaje } from '../../interfaces/personaje';

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
      nombre: 'Bulma',
      fuerza:10
    }


  ]

}
