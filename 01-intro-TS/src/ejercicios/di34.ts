// esta función recoge dos números para sumarlos, o solo el primero poniéndoselo también el mismo al segundo
function sumarNumerosConTipos(a: number ,b: number = a) {
    return a+b;
} 

const resultadoSumar: number = sumarNumerosConTipos(2); // suma dos mas dos
const resultadoSumar2: number = sumarNumerosConTipos(2,4); // suma dos mas 4

// esta función recoge dos números para restarlos, o solo el primero poniéndoselo también el mismo al segundo
function restarNumerosConTipos(a: number ,b: number = a) {
    return a-b;
} 

const resultadoRestar: number = restarNumerosConTipos(2); // restar dos menos dos
const resultadoRestar2: number = restarNumerosConTipos(4,2); // restar cuatro menos dos


// esta función recoge dos números para multiplicarlos, o solo el primero poniéndoselo también el mismo al segundo
function multiplicar (primerNumero: number, segundoNumero: number =primerNumero){
    return primerNumero * segundoNumero;
}
let resultadoMultiplicar1: number = multiplicar(5); // aquí solo con un número podría hacer la 
// multiplicación porque el segudndo tiene como "por defecto" el valor del primerNumero

let resultadoMultiplicar2: number = multiplicar(5,6);// aquí se le da el valor al segundoNúmero 


// esta función recoge dos números para dividrlos, o solo el primero poniéndoselo también el mismo al segundo
function dividir (primerNumero: number, segundoNumero: number=primerNumero){
    return primerNumero/segundoNumero;
}

let resultadoDividir1: number = dividir(5); // aquí solo con un número podría hacer la división 
// porque el segudndo tiene como "por defecto" el valor que se ha metido al primer número

let resultadoDividir2: number = dividir(5,6);// aquí se le da el valor al segundoNúmero

console.log({resultadoSumar});
console.log({resultadoSumar2});
console.log({resultadoRestar});
console.log({resultadoRestar2});
console.log({resultadoMultiplicar1});
console.log({resultadoMultiplicar2});
console.log({resultadoDividir1});
console.log({resultadoDividir2});

export{};