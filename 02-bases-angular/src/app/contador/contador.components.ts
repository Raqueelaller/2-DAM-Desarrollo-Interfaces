import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: ` <h1>{{ title}}</h1>
<br>
<p>
 <h2> Contador: {{contador}}</h2>
 <h2>Cantidad: {{cantidad}}</h2>
 <button (click)="incrementar()"> Incrementar: {{cantidad}}</button>
 <button (click)="decrementar()"> Decrementar: {{cantidad}}</button>
 <button (click)="resetear()"> Resetear</button>`
 ,
})
export class ContadorComponent{
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
