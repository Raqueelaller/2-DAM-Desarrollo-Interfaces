import type { Direccion } from "./ejercicio9.1";

// Clase Persona
class Persona {
  nombre: string;
  apellidos: string;
  telefono: number;
  genero: string;
  direccion?: Direccion; 

  constructor(
    nombre: string,
    apellidos: string,
    telefono: number,
    genero: string,
    direccion?: Direccion
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.genero = genero;
    this.direccion = direccion;
  }

  mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
    console.log(`telefono: ${this.telefono}`);
    console.log(
      `calle: ${this.direccion?.calle}, localidad: ${this.direccion?.localidad}, provincia: ${this.direccion?.provincia}`
    );
    console.log(`Género: ${this.genero}`);
  }
}

class Arbitro extends Persona {
  numeroColegiado: number;

  constructor(
    nombre: string,
    apellidos: string,
    telefono: number,
    genero: string,
    numeroColegiado: number,
    direccion?: Direccion 
  ) {
    super(nombre, apellidos, telefono, genero, direccion);
    this.numeroColegiado = numeroColegiado;
  }

  mostrarArbitro(): void {
    super.mostrarDatos();
    console.log(`numero de colegiado: ${this.numeroColegiado}`);
  }
}

class Jugador extends Persona {
  categoria: 1 | 2 | 3 | 4 | 5 | 6;

  constructor(
    nombre: string,
    apellidos: string,
    telefono: number,
    genero: string,
    categoria: 1 | 2 | 3 | 4 | 5 | 6,
    direccion?: Direccion 
  ) {
    super(nombre, apellidos, telefono, genero, direccion);
    this.categoria = categoria;
  }

  mostrarJugador(): void {
    super.mostrarDatos();
    console.log(`categoría: ${this.categoria}`);
  }
}

class Equipo {
  nombre: string;
  jugador1: Jugador;
  jugador2: Jugador;

  constructor(nombre: string, jugador1: Jugador, jugador2: Jugador) {
    this.nombre = nombre;
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
  }

  mostrarEquipo(): void {
    console.log(`--------------------------------------------------------------------`);
    console.log(`el nombre del equipo es: ${this.nombre} `);
    console.log(`lo componen estos jugadores:`);
    console.log(`-----------------primer jugador/a--------------------`);
    this.jugador1.mostrarJugador();
    console.log(`-----------------segundx jugador/a--------------------`);
    this.jugador2.mostrarJugador();
  }
}

class Partido {
  id: number;
  equipo1: Equipo;
  fecha: Date;
  hora: number;
  recinto: string;
  arbitro: Arbitro;
  equipo2?: Equipo; 

  constructor(
    id: number,
    equipo1: Equipo,
    fecha: Date,
    hora: number,
    recinto: string,
    arbitro: Arbitro,
    equipo2?: Equipo 
  ) {
    this.id = id;
    this.equipo1 = equipo1;
    this.fecha = fecha;
    this.hora = hora;
    this.recinto = recinto;
    this.arbitro = arbitro;
    this.equipo2 = equipo2;
  }

  mostrarPartido(): void {
    console.log(`id del partido: ${this.id}`);
    console.log(`equipo ${this.equipo1.nombre}${this.equipo2 ? " vs " + this.equipo2.nombre : ""}`);
    console.log(`----------------------datos de los equipos y jugadores ---------------------`);
    this.equipo1.mostrarEquipo();
    if (this.equipo2) {
      console.log(`--------------------------------`);
      this.equipo2.mostrarEquipo();
    }
    console.log(`el día ${this.fecha} a las ${this.hora} en ${this.recinto}`);
    console.log(`arbitrado por ${this.arbitro.nombre}`);
  }
}

class Calendario {
  partidos: Partido[];

  constructor(partidos: Partido[]) {
    this.partidos = partidos;
  }

  mostrarCalendario(): void {
    console.log(`------------------ Calendario de liga --------------------`);
    this.partidos.forEach((Partido) => {
        console.log("------------------- PARTIDO --------------------")
        Partido.mostrarPartido();
    });
  }
}

// ------------------ Datos de prueba ------------------

const direccion1: Direccion = { calle: "Calle Larios 1", cp: 29001, localidad: "Málaga", provincia: "Málaga" };
const direccion2: Direccion = { calle: "Avenida Andalucía 25", cp: 29002, localidad: "Málaga", provincia: "Málaga" };
const direccion3: Direccion = { calle: "Calle Victoria 50", cp: 29012, localidad: "Málaga", provincia: "Málaga" };
const direccion4: Direccion = { calle: "Paseo del Parque 8", cp: 29015, localidad: "Málaga", provincia: "Málaga" };

// ------------------ Jugadores ------------------
const jugadorA1 = new Jugador("Jorge", "Arrenberg", 600111222, "Masculino", 3, direccion1);
const jugadorA2 = new Jugador("Raquel", "Aller", 600111333, "Femenino", 3, direccion1);
const jugadorB1 = new Jugador("María Jesús", "", 600111444, "Femenino", 2, direccion3);
const jugadorB2 = new Jugador("Eliana", "Villalobos", 600111555, "Femenino", 2, direccion2);
const jugadorC1 = new Jugador("Héctor", "Pino", 600111666, "Masculino", 4, direccion4);
const jugadorC2 = new Jugador("Antonio", "Benítez", 600111777, "Masculino", 4); // 

// ------------------ Equipos ------------------
const equipo1 = new Equipo("Los toros negros", jugadorA1, jugadorA2);
const equipo2 = new Equipo("Las mantis religiosas", jugadorB1, jugadorB2);
const equipo3 = new Equipo("Los orcas moradas", jugadorC1, jugadorC2);

// ------------------ Árbitros ------------------
const arbitro1 = new Arbitro("David", "Romero", 699888777, "Masculino", 1001, direccion3);
const arbitro2 = new Arbitro("Lucía", "Morales", 699888666, "Femenino", 1002); 

// ------------------ Partidos ------------------
const partido1 = new Partido(1, equipo1, new Date("2025-11-05"), 18, "Estadio La Rosaleda", arbitro1, equipo2);
const partido2 = new Partido(2, equipo2, new Date("2025-11-12"), 20, "Campo de Fútbol El Palo", arbitro2, equipo3);
const partido3 = new Partido(3, equipo3, new Date("2025-11-19"), 19, "Polideportivo Ciudad Jardín", arbitro1);

// ------------------ Calendario ------------------
const calendario = new Calendario([partido1, partido2, partido3]);
calendario.mostrarCalendario();

export {};
