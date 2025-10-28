let habilidades = ['velocidad','magia','curacion'];
let hablidades2 = ['velicidad','magia','curacion',true,123];
let hablidades3: string[] = ['velicidad','magia','curacion'];
let hablidades4: (string | boolean | number)[] = ['velicidad','magia','curacion',true,123];

const personaje= {
    nombre: "goku",
    pv : 100 ,
    habilidades:["fuerza", "velocidad"]
}

console.log(personaje);


interface Personaje {
    nombre: String,
    pv: number,
    habilidades: string[],
    procedencia?: String
}

const saiyan: Personaje = {
    nombre: "vegeta",
    pv: 500,
    habilidades:["guerero del espacio", "fuerza", "transformación"],
    procedencia: "planeta vegeta"

}

saiyan.procedencia = "La tierra";

console.log(saiyan);

export{};
