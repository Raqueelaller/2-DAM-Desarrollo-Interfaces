import { Component } from '@angular/core';
import { ContadorModule } from './contador/contador.module';
import { InstitutoComponent } from './institutos/instituto/instituto';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from "./dbz/pages/main-page";
import { DbzModule } from './dbz/dbz-module';
@Component({
  selector: 'app-root',
  imports: [ContadorModule, HeroesModule, InstitutoComponent, DbzModule],
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
