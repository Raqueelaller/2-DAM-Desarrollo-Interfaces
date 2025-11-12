import { Instituto } from './../../../../../01-intro-TS/src/ejercicios/ejercicio9.1';
import { Component } from '@angular/core';
import { InstitutoComponents } from './instituto';
@Component({
  selector: 'app-instituto',
  imports: [],
  templateUrl: './instituto.html',
  styleUrl: './instituto.css',
})
export class InstitutoComponent {

 public nombre : string="IES Playamar";
public localidad: string = "torremolinos";
public familiasProfesionales:string[]=["informática ycomunicaciones","Transporte","Mantenimiento de vehículos"];
public logo:string="https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png";

  public getNombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  public cambiarInstituto() {
    if (this.nombre == "IES Playamar") {
      this.nombre = "Jacaranda";
      this.localidad = "Churriana";
      this.familiasProfesionales = ["Hostelería y turismo", "IndustriaAlimentaria"];
      this.logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2eO6wxPqMqL3zN7HkADl-5zR30E7ukj2Lw&s"
    } else {
      this.nombre = "IES Playamar";
      this.familiasProfesionales = ["informática ycomunicaciones", "Transporte", "Mantenimiento de vehículos"];
      this.localidad = "torremolinos";
      this.logo = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png";
    }

  }


  public listadoColegios: InstitutoComponent[]=[

  ];
}

export class Insti {

  public nombre: string;
  public localidad: string;
  public familiasProfesionales: string[] ;
  public logo: string ;

  constructor(
    nombre: string,
    localidad: string,
    familiasProfesionales:string[],
    logo:string

  ){

    this.nombre=nombre;
    this.localidad=localidad;
    this.familiasProfesionales=familiasProfesionales;
    this.logo=logo;


  }

  public getNombre(){
    return this.nombre;
  }
  public getLocalidad(){
    return this.localidad;
  }
  public getFamiliasProfesionales(){
    return this.familiasProfesionales;
  }
  public getLogo(){
    return this.logo;
  }

}
const playamar = new Insti("Ies playamar","torremolinos",["informática ycomunicaciones","Transporte","Mantenimiento de vehículos"],"https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png" );

const jacaranda = new Insti("Jacaranda","Churriana",["Hostelería y turismo", "IndustriaAlimentaria"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2eO6wxPqMqL3zN7HkADl-5zR30E7ukj2Lw&s");

const sanJose = new Insti("San josé","Málaga",["frío","sanidad","informática"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1kRwOmsxnp4C7xv5OFZtgP39zF-H0ag8tQ&s")

const litoral = new Insti("Ies Litoral", "Málaga", ["Sanidad","Informática"],"https://pbs.twimg.com/profile_images/1308810627532689408/-8533fx7_400x400.jpg")
