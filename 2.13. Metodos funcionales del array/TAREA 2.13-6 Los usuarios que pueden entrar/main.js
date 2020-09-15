'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-6

const users = [
	{ name: 'María', isPremium: false, pin: 2389 },
	{ name: 'Lucía', isPremium: true, pin: 2384 },
	{ name: 'Susana', isPremium: true, pin: 2837 },
	{ name: 'Rocío', isPremium: false, pin: 5232 },
	{ name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const even = users.filter((users) => users.pin % 2 === 0);

console.log(even);
