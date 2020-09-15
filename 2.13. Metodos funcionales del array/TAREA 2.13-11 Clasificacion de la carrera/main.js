'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-11

const runners = [
	{ name: 'Gregory Goyle', time: 56 },
	{ name: 'Nymphadora Tonks', time: 9 },
	{ name: 'Luna Lovegood', time: 45 },
	{ name: 'Cedric Diggory', time: 28 },
	{ name: 'Cho Chang', time: 35 },
];

runners.sort((a, b) => a.time - b.time);

console.log(runners);
