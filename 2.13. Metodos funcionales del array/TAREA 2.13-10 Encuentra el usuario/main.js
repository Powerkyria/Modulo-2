'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-10


// a)

const users = [
	{ name: 'María', isPremium: false, pin: 2389 },
	{ name: 'Lucía', isPremium: true, pin: 2384 },
	{ name: 'Susana', isPremium: true, pin: 2837 },
	{ name: 'Rocío', isPremium: false, pin: 5232 },
	{ name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidence = users.find((name) => name.pin === 5232);

console.log(incidence);

// // b)

const positionUser = users.findIndex((name) => name.pin === 5232);

console.log(positionUser);

users.splice(3,1);

console.log(users);
