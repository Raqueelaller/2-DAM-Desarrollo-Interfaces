interface Alumno{ // cremos una interfaz en la que le damos a cada atributo el valor que deben ser
nombre:string,
apellidos:string,
nacionalidad:string,
anyoNacimiento:Date, 
telefono: number,
email: string,
modulosMatriculados: string,
convalidaIPE: boolean,
nivelPadel?: "aprendiz" | "nobato" | "profesional", // la interrogación indica que no es obligatorio
centroProcedencia?: string // la interrogación indica que no es obligatorio
}


// creamos el primer objeto alumno.
const alumno1: Alumno= {
    nombre:"Raquel",
    apellidos: "Aller, Cerón",
    nacionalidad:"Española",
    anyoNacimiento: new Date(2000,4,23),
    telefono: 6666666666,
    email: "raqueel@gmail.com",
    modulosMatriculados: "DI, SE, PSP",
    convalidaIPE: true,
    nivelPadel: "aprendiz"
}
console.log(alumno1);


const alumno2: Alumno= {
    nombre:"Jorge",
    apellidos: "Arrenberg, Andrade",
    nacionalidad:"Española",
    anyoNacimiento: new Date(2002,9,12),
    telefono: 6666666666,
    email: "jorge@gmail.com",
    modulosMatriculados: "DI, SE, PSP",
    convalidaIPE: false,
    nivelPadel: "nobato"
}
console.log(alumno2);

export{};