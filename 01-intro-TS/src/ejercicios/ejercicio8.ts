interface Producto {
	descripcion: string;
	precio: number;
}


const telefono: Producto = {
	descripcion: 'iPhone 15 Pro',
	precio: 1000
}

const tablet: Producto = {
	descripcion: 'iPad Air 3',
	precio: 500
}

interface CalculaImpuestoOpciones {
	impuesto: number;
	productos: Producto[];
}


// En lugar de recibir el objeto completo 'opciones', desestructuramos directamente
// las propiedades que necesitamos: 'impuesto' y 'productos'
// así evitamos tener que escribir 'opciones.' continuamente.
function calculaImpuesto ({ impuesto, productos }: CalculaImpuestoOpciones): number[] {
	let total = 0;
	
	
	// En el forEach, desestructuramos cada producto para obtener solo la propiedad 'precio'
	// que es la única que necesitamos para el cálculo
	// evitando tener que poner 'producto.precio' en cada iteración
	productos.forEach(({ precio }) => {
		total += precio;
	});
	
	return [total, total * impuesto];
}

const carritoCompra = [telefono, tablet];
const impuesto = 0.21;

const resultado = calculaImpuesto({
	productos: carritoCompra,
	impuesto: impuesto
	
})

// Desestructuramos el array resultado para obtener directamente las variables 'total' e 'impuestoCalculado'
// para no tener que acceder por índices numéricos como resultado[0] y resultado[1]
const [total, impuestoCalculado] = resultado;

console.log('Total', total);
console.log('Impuesto', impuestoCalculado);

export {};