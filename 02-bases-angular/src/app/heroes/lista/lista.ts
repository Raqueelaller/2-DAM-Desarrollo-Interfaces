import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class ListaComponents {
  public nombreHeroes:  string[] = ["Goku", "bulma", "Vegeto", "piccolo"];

  public personajeEliminado: string="";

  public eliminarPersonajes():void{
    this.personajeEliminado = this.nombreHeroes.pop()!;
  }

}
