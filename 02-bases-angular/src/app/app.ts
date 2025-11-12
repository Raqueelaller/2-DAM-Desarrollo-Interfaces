import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.components';
import {  ListaComponents } from "./heroes/lista/lista";
import { HeroeComponents } from './heroes/heroe/heroe';
import { InstitutoComponent } from './institutos/instituto/instituto';
@Component({
  selector: 'app-root',
  imports: [ContadorComponent, ListaComponents, HeroeComponents, InstitutoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
   title= 'Ejercicio 4.1 Raquel Aller';
   contador=0;
   cantidad= 1;

  incrementar(): void{
    this.contador += this.cantidad;
  }

  decrementar(): void{
    this.contador -= this.cantidad;
  }

  resetear(): void {
    this.contador=0;
  }

}
