export class Persona{
    constructor(
        public nombre:string, 
        public apellido:string,
        public localidad:string, 
        public edad:number, 
        public sexo?: "Mujer"|"Hombre"
    ){
       
    }
}

