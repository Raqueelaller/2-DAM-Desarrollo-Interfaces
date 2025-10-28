interface AlumnoFP{ // creamos la interfaz de Alumno
    nombre:string;
    apellidos:string;
    modulosProfesionales: string[]; //creamos un array de tipo string
    expedientes: Expediente[]; //creamos un array de tipo expediente
}

export interface Expediente{ //creamos la interfaz Expediente
    curso:string;
    notaMedia:number;
}

const raquel: AlumnoFP = { //creamos el primer objeto AlumnoFP
    nombre:"raquel",
    apellidos:"Aller",
    modulosProfesionales:["DAM", "DART", "SEG"],
    expedientes:[{curso:"DAM1",notaMedia:7},{curso:"dietetica1",notaMedia:7},
        {curso:"dietetica2", notaMedia:8}
    ]
}

const marichus: AlumnoFP = { //creeamos el segundo objeto AlumnoFP
    nombre:"Marichus",
    apellidos:"Serrano",
    modulosProfesionales:["DAM", "DART", "SEG"],
    expedientes:[{curso:"DAM1",notaMedia:7},{curso:"administracion",notaMedia:7},
        {curso:"administracion", notaMedia:8}
    ]
}

const jorge: AlumnoFP = { //creeamos el tercer objeto AlumnoFP
    nombre:"Jorge",
    apellidos:"Arrenberg",
    modulosProfesionales:["DAM", "DART", "SEG"],
    expedientes:[{curso:"DAM1",notaMedia:9},{curso:"DAW1",notaMedia:7},
        {curso:"DAW2", notaMedia:9}
    ]
}

const matriculas: AlumnoFP[] = [raquel,marichus,jorge]; //creamos un array de objetos AlumnoFP

const [A1,A2,A3]=matriculas; //para trabajar con los objetos del array sin saber qué objeto es
const{nombre}=A2;
const{apellidos}=A2;

const nombre_apellido=nombre.concat(" ").concat(apellidos);

const [modulo1,modulo2,modulo3] = A2.modulosProfesionales; //para trabajar con los string del array 
// 'modulosProfesionales' que se encuentra dentro del segundo objeto (A2) Alumnofp
const primer_modulo=modulo1

const [CN1,CN2,CN3] = A2.expedientes //para trabajar con los objetos de tipo Expediente que se encuentran en el array 'expedientes'

const segunda_entrada=CN2


// console.log({nombre_apellido,primer_modulo,segunda_entrada}) //sale por consola los siguientes parámetros



export{};