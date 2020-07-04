'use strict';

const dogAge = 5;

const oldDog = 24 + (dogAge - 2) * 5;

if (dogAge === 1) {
	console.log('Tu perro tiene 15 años humanos');
} else if (dogAge === 2) {
	console.log('Tu perro tiene 24 años humanos');
} else {
	console.log(`Tu perro tiene ${oldDog} años humanos`);
}
