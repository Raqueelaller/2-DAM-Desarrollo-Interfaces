import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
