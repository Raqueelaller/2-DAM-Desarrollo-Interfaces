// Clase Persona
class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  localidad: string;
  sexo?: string;

  constructor(nombre: string, apellidos: string, edad: number, localidad: string, sexo?: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.localidad = localidad;
    this.sexo = sexo;
  }

  mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Localidad: ${this.localidad}`);
    if (this.sexo) console.log(`Sexo: ${this.sexo}`);
  }
}

// Clase Profesor que hereda de Persona
class Profesor extends Persona {
  centro: string;
  especialidad: string;
  departamento: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    localidad: string,
    centro: string,
    especialidad: string,
    departamento: string,
    sexo?: string
  ) {
    super(nombre, apellidos, edad, localidad, sexo);
    this.centro = centro;
    this.especialidad = especialidad;
    this.departamento = departamento;
  }

  mostrarDatos(): void {
    super.mostrarDatos();
    console.log(`Centro: ${this.centro}`);
    console.log(`Especialidad: ${this.especialidad}`);
    console.log(`Departamento: ${this.departamento}`);
  }
}

// Clase Alumno que hereda de Persona
class Alumno extends Persona {
  centro: string;
  curso: string;
  asignaturas: string[];

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    localidad: string,
    centro: string,
    curso: string,
    asignaturas: string[],
    sexo?: string
  ) {
    super(nombre, apellidos, edad, localidad, sexo);
    this.centro = centro;
    this.curso = curso;
    this.asignaturas = asignaturas;
  }

  mostrarDatos(): void {
    super.mostrarDatos();
    console.log(`Centro: ${this.centro}`);
    console.log(`Curso: ${this.curso}`);
    console.log(`Asignaturas: ${this.asignaturas.join(", ")}`);
  }
}

// Crear instancias
const profesor1 = new Profesor(
  "Antonio",
  "López Camacho",
  40,
  "Málaga",
  "IES Playamar",
  "DI",
  "Informática",
  "Masculino"
);

const alumno1 = new Alumno(
  "Raquel",
  "Aller Cerón",
  25,
  "Málaga",
  "IES Playamar",
  "2º DAM",
  ["DI", "SEG", "PSP", "IPEII"],
  "Femenino"
);

// Mostrar datos
console.log("---- Profesor ----- ");
profesor1.mostrarDatos();

console.log("\n------ Alumno ---------");
alumno1.mostrarDatos();

export{}


