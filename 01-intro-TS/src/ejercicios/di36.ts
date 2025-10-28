interface AlumnoFP{ //creamos la interfaz alumnoFP que tiene objeto tipo Matricula que a su vez tiene objeto tipo centroEducativo
    nombre:string;
    apellidos:string;
    anyoNacimiento:number;
    nacionalidad:string;
    matricula:Matricula; //objeto tipo Matricula
}

interface Matricula{ //creamos la interfaz Matricula que a su vez tiene objeto de tipo centroEducativo 
    modulos:string[];
    ciclo: string;
    centroEducativo:CentroEducativo;
}

interface CentroEducativo{ //creamos la interfaz CentroEducativo
    centro:string;
    localidad:string;
    codigo:number;
    telefono:number;
}

const raquel:AlumnoFP ={ //creamos objeto de tipo AlumnoFP
    nombre: "raquel",
    apellidos: "Aller",
    anyoNacimiento:2000,
    nacionalidad:"Española",
    matricula: {
        modulos:["DI","SGE","IPE II","DART"],
        ciclo:"DAM",
        centroEducativo:{
            centro:"Playamar",
            localidad:"Torremolinos",
            codigo:1,
            telefono:6666666
        }
    }
}

const jorge:AlumnoFP ={ //creamos objeto de tipo AlumnoFP
    nombre: "Jorge",
    apellidos: "Arrenberg",
    anyoNacimiento:2003,
    nacionalidad:"Español",
    matricula: {
        modulos:["DI","SGE","IPE II","DART"],
        ciclo:"DAM",
        centroEducativo:{
            centro:"Playamar",
            localidad:"Torremolinos",
            codigo:1,
            telefono:6666666
        }
    }
}

console.table(raquel); // creamos tabla que muestra los datos del primer objeto creado

const{nombre}=jorge; //elegimos solo el nombre
const{apellidos}=jorge; //elegimos solo el apellido
const{ciclo}=jorge.matricula // elegimos el ciclo que va dentro de matrícula
const{centro}=jorge.matricula.centroEducativo //elegimos el centro que va dentro de matricula y dentro de centroEducativo
const nombre_Apellido=nombre.concat(" ").concat(apellidos); // concatenamos el nombre y el apellido
console.table({nombre_Apellido,ciclo,centro}); //mostramos en la tabla los valores exigidos del ejercicio
export{};