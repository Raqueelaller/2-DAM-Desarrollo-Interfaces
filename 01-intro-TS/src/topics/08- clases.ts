export class Persona {
    public nombre: string;
    public direccion: string;
    public altura?: number;
    private edad: number;

    constructor(){
    this.nombre="Raquel",
    this.direccion="Málaga",
    this.edad= 25
    }
}

const raquel = new Persona();
console.log(raquel);

// console.log(raquel.edad);


export class PersonaCutre{
    public nombre: string;
    public direccion: string;
    public altura?: number;
    private edad: number;   

    constructor(nombre:string, direccion:string, edad:number, altura:number){
        this.nombre=nombre;
        this.direccion=direccion;
        this.edad=edad;
        this.altura=altura;
    }
}

const gohan = new PersonaCutre("gohan", "Tierra",30,180);

console.log(gohan)

export class PersonaGuay{
    constructor(
        public nombre:string, 
        public direccion:string, 
        public edad:number, 
        public altura:number
    ){
       
    }
}

const vegeta = new PersonaGuay("vegeta", "Vegeta", 34, 168);

console.log(vegeta)
export{};