import { type Alumno, mostrarAlumnos, matricularAlumno,mostrarDireccion } from './ejercicio9.1';
import {type Enseñanza } from './ejercicio9.1';
import {type Instituto } from './ejercicio9.1';
import {type Direccion } from './ejercicio9.1';




const sanidad: Enseñanza ={ //creamos una enseñanza
    nivel: "superior",
    obligatoria: true,
    familiaProfesional: "sanidad",
    horario: "Mañana"
}

const informatica: Enseñanza={ //creamos otra enseñanza
    nivel: "superior",
    obligatoria: true,
    familiaProfesional: "informática",
    horario: "Tarde"
}

const idioma:Enseñanza={ //creamos otra enseñanza
    nivel: "medio",
    obligatoria: false,
    familiaProfesional: "idioma",
    horario: "Telemático"
}

const raquel: Alumno = { //creamos el primer alumno
    nombre:"raquel",
    edad:25,
    sexo: "mujer",
    enseñanza:sanidad,
    direccion:{
        calle:"arganda",
        cp:29007,
        localidad:"Málaga",
        provincia:"Málaga"
    }
}

const jorge: Alumno = { // creamos el segundo Alumno
    nombre:"Jorge",
    edad:23,
    sexo: "hombre",
    enseñanza:informatica,
    direccion:{
        calle:"limonar",
        cp:29003,
        localidad:"Málaga",
        provincia:"Málaga"
    }
}

const playamar:Instituto={ // creamos el instituto
    nombre:"IES Playamar",
    director: "Antonio",
    telefono:66666666,
    correo: "iesplayamar@gamil.com",
    direccion: {
        calle:"litoral",
        cp:29111,
        localidad:"Torremolinos",
        provincia:"Málaga"
    },
    listadoAlumno:[raquel]
}

//usamos la función pasándole como parámetro el segundo alumno creado y el instituto creado.
matricularAlumno(jorge,playamar); 
// usamos la función para mostrar los alumnos de dicho instituto.
mostrarAlumnos(playamar); 
// usamos la función para mostrar la dirección del instituto creado.

mostrarDireccion(playamar); 


export{};
