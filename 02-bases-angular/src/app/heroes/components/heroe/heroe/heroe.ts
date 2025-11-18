import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
  standalone:false
})
export class HeroeComponents {
  public nombre :string = "Goku";
  public edad : number = 32;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {

    return `${this.nombre} - ${this.edad}`;
  }

  private getNombrePrivado(): string{
    return 'Kakarot';
  }

  public cambiarNombre(){
    if(this.nombre=="Goku"){
      this.nombre="vegeta";
    }
    else{
      this.nombre="Goku";
    }



  }

  public cambiarEdad(){

    this.edad = 41;
  }


}
