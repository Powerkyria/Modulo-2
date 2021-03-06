'use strict';

//https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-12

const users = [
	{ name: 'María', isPremium: false, pin: 2389 },
	{ name: 'Lucía', isPremium: true, pin: 2384 },
	{ name: 'Susana', isPremium: true, pin: 2837 },
	{ name: 'Rocío', isPremium: false, pin: 5232 },
	{ name: 'Inmaculada', isPremium: false, pin: 8998 },
];

// for(const name of users){
// 	const nameUsers = name.name;
// }

users.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	} else {
		return 1;
	}
});

console.log(users);

// ¿Y por su número de PIN?

// users.sort((a, b) => a.pin - b.pin);

// console.log(users);
