/*
    ===== Código de TypeScript =====
*/

interface Direccion{ // creamos una interfaz tipo dirección que vamos a añadir en la interfaz objeto 
    calle:string,
    pais: string,
    ciudad: string
}

interface SuperHero{ // creamos una interfaz tipo SuperHero 
    name:string,
    age:number,
    address:Direccion
    showAddress: () => string //creamos este método que va a mostras los datos de los objetos que creemos
}

const superHeroe: SuperHero = { //creamos un objeto llamado superHeroe
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress(): string {
        // console.log(this.name + ', ' + this.address.ciudad + ', ' + this.address.pais); //mostramos los valores del objeto
        return (this.name + ', ' + this.address.ciudad + ', ' + this.address.pais); //mostramos los valores del objeto
    }
}


const address = superHeroe.showAddress();
console.log( address );


export {};