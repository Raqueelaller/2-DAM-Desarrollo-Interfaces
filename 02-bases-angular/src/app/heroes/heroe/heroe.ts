import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  imports: [],
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
})
export class HeroeComponents {
  public nombre :string = "Son goku";
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

    this.edad = this.edad +1;
  }


}
