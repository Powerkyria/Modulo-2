'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-4

const dogAge = 5;

const oldDog = 24 + (dogAge - 2) * 5;

if (dogAge === 1) {
	console.log('Tu perro tiene 15 años humanos');
} else if (dogAge === 2) {
	console.log('Tu perro tiene 24 años humanos');
} else {
	console.log(`Tu perro tiene ${oldDog} años humanos`);
}
