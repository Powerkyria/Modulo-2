'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-4

const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];

const premiumUsers = users.filter((users) => users.isPremium === true);

console.log(premiumUsers);
