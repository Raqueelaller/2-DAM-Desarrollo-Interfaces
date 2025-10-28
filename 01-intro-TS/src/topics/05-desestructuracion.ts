interface Detalles{
    autor:string,
    anio:number
}


interface ReproductorAudio{
    volumenAudio:number;
    duracionCancion:number;
    cancion:string;
    detalles:Detalles;

}

const reproductorAudio: ReproductorAudio={
    volumenAudio: 50,
    duracionCancion: 180,
    cancion: "Aserejé",
    detalles:{
       autor:"las ketchup",
       anio:1998
    }
}

const nombreCancion = reproductorAudio.cancion; //esta forma es una forma la que haríamos normalmente
console.log(nombreCancion);
const{cancion}= reproductorAudio; //esto es la forma de desestruración para ahorrarnos código
console.log(cancion)

const {autor: autorCancion } = reproductorAudio.detalles; 

const dbz: string[]= ["goku","piccolo","bulma"];
console.log("Personake 4:",dbz[3]||"no hay personaje");

const pj = dbz[3] || "no hay personaje";
console.log("personaje 4:",pj);

const [pj1, pj2, pj3] = dbz;

console.log("personaje 3:", pj3);

const[ , , , per4 = "not found"]=dbz;
console.log("personaje 4:", per4);



export{};