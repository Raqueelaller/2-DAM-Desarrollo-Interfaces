import { type Expediente } from './di37';


export class Estudiante{
      public  nombre:string;
      public  apellido: string;
      public  edad:number;
      public  sexo?: "mujer" | "hombre";
      public  expediente:Expediente;
      public localidad:string;

      constructor(nombre:string, apellido:string, edad:number, expediente:Expediente, localidad:string, sexo: "mujer"|"hombre"){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.expediente=expediente;
        this.localidad=localidad;
        this.sexo=sexo;
      }
}

export class Instituto{
    public centro:string;
    public localidad:string;
    public listadoEstudiante:Estudiante[];

    constructor(centro:string, localidad:string, listadoEstudiante:Estudiante[]){
        this.centro=centro;
        this.localidad=localidad;
        this.listadoEstudiante=listadoEstudiante;
    }

}
export const expedienteRaquel: Expediente={
    curso:"dam1",
    notaMedia: 7
}

export const expedienteChus: Expediente={
    curso:"dam1",
    notaMedia: 8
}
 
const raquel = new Estudiante("raquel", "Aller", 25,expedienteRaquel,"malaga","mujer");
const chus = new Estudiante("Maria jesus","Serrano", 30,expedienteChus,"priego de córdoba", "mujer");
const listadoEstudiante= [raquel,chus];
const playaMar = new Instituto("Playamar", "Torremolinos",listadoEstudiante);

console.log(raquel);
console.log(chus);
console.log(playaMar);

export{};


