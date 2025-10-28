function sumarNumerosSinDefinirNada(){
    return 2+3;
}

/*function sumarNumerosSinTipos(a,b) { 
    return a+b;
}
*/
function sumarNumerosConTipos(a: number ,b: number) {
    return a+b;
} 

const resultado: number = sumarNumerosConTipos(2,3);

const sumarNumerosFlechas = (a: number, b: number): string => {
    // return(a+b).toString;
    return `${a+b}`;
}

const resultado2: string = sumarNumerosFlechas(4,7)

console.log(resultado);
console.log(resultado2);

function multiplicar (primerNumero: number, segundoNumero?: number, base: number =2){
    return primerNumero * base;
}

// let resultadoMultiplicar: number;
multiplicar(5); // aquí solo con un número podría hacer la multiplicación porque el segudndo es opcional(?) y la base tiene como "por defecto" el valor 2
multiplicar(5,6);// aquí se le da el valor al segundoNúmero y base sigue valiendo 2
multiplicar(5,6,4); // aquí todos los parámetros tienen valores

interface Personaje{
    nombre:string,
    pv:number,
    muestraPV:() => void ;
}

const curarPersonaje=(personaje: Personaje, cantidad: number) =>{
    personaje.pv += cantidad
}

const saiyan: Personaje ={
    nombre: "Vegeta",
    pv: 75,
    muestraPV(){
        console.log(`puntos de vida ${this.pv}`)
    }

}
saiyan.muestraPV();
curarPersonaje(saiyan,10);
saiyan.muestraPV();
curarPersonaje(saiyan,30);
saiyan.muestraPV();




export{};