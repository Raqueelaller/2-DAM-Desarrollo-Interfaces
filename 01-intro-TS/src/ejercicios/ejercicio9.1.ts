export interface Instituto{ // creamos la interfaz Instituto
    nombre:string;
    director: string;
    telefono:number;
    correo: string;
    direccion: Direccion;
    listadoAlumno: Alumno[];
}

export interface Alumno{ // creamos la interfaz Alumno
    nombre:string;
    edad:number;
    sexo: "mujer" | "hombre";
    enseñanza:Enseñanza;
    direccion:Direccion;
}

export interface Enseñanza{ // creamos la interfaz Enseñanza
    nivel: string;
    obligatoria: boolean;
    familiaProfesional?: string;
    horario: "Mañana"|"Tarde"|"Telemático";
}

export interface Direccion{ // creamos la interfaz Dirección 
    calle:string;
    cp:number;
    localidad:string;
    provincia:string;

}

//creamos la función matricularAlumno la cual le pasamos por parámetros un alumno y un instituto
export function matricularAlumno(a:Alumno, b:Instituto){ 
     b.listadoAlumno.push(a); 
     //con esto añadimos al Array del listado de alumnos instituto 'b' el alumno 'a'
}

 // creamos la función mostrarAlumnos para mostrar el lisado de alumnos
export function mostrarAlumnos( b:Instituto){
    
//recorremos el array con un forEach para imprimir por consola los alumnos (con solo los atributos que pedía el ejericio)
    b.listadoAlumno.forEach((a:Alumno) => { 
        const {nombre}=a;
        const{nivel}=a.enseñanza;
        const{localidad}=a.direccion;
        console.log("nombre:",nombre+", nivel enseñanza:",nivel+", localidad: ",localidad) 
    });
}
export function mostrarDireccion(b:Instituto){ // creamos la función para imprimir por consola la dirección
    console.log("dirección: ",b.direccion);
}



// export{};
