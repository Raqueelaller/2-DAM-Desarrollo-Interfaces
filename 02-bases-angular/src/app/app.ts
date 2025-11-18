import { Component } from '@angular/core';
import { ContadorModule } from './contador/contador.module';
import { InstitutoComponent } from './institutos/instituto/instituto';
import { HeroeModule } from './heroes/heroe.module';
@Component({
  selector: 'app-root',
  imports: [ContadorModule,HeroeModule, InstitutoComponent],
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
