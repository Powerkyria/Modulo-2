'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_7_arrays_y_bucles#ejercicio-10

const items = [
	'Ada',
	1815,
	[ 'Informática', 'Matemática', 'Escritora' ],
	{
		mother: 'Anna Isabella',
		father: 'Lord Byron'
	}
];

for (let i = 0; i < items.length; i++) {
	let value = items[i];
	let position = [ i ];
	let type = typeof items[i];

	console.log(`El dato ${value} está en la posición ${position} y es de tipo ${type}`);
}
