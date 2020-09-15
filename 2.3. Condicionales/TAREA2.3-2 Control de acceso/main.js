'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-2

const name = 'Powerkyria';

if (name === 'Powerkyria') {
	console.log(`Bienvenida, ${name}!`);
} else if (name !== 'Powerkyria') {
	console.log('Lo siento pero el usuario que has introducido no está registrado');
}
