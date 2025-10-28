import { PersonaGuay } from "./08- clases";

export class Heroe extends PersonaGuay{
    constructor(
        
        public apodo: string,
        public nombreReal: string,
        public planetaOrigen: string,
        public edad: number,
        public altura:number
    ){
        super(nombreReal, planetaOrigen, edad,altura);
    }
}

const goku = new Heroe("Goku","kakara", "Tierra", 26, 180);

console.log(goku);

export{};