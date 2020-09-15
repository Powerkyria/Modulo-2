'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-3

const users = [
	{ name: 'María', isPremium: false },
	{ name: 'Lucía', isPremium: true },
	{ name: 'Susana', isPremium: true },
	{ name: 'Rocío', isPremium: false },
	{ name: 'Inmaculada', isPremium: false },
];

const saludo = users.map((users) => {
	if (users.isPremium === true) {
		return `Bienvenida ${users.name} Gracias por confiar en nosotros.`;
	} else if (users.isPremium === false) {
		return `Bienvenida ${users.name}`;
	}
});
console.log(saludo);
