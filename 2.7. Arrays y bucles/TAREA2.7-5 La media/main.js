'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_7_arrays_y_bucles#ejercicio-5


// a)

const numbers = [ 2, 3, 8, 7, 10];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
	acc += numbers[i] / numbers.length;
}

console.log(acc);

// RECUERDA
// acc += numbers[i] es igual que poner acc = acc + numbers[i]

// b)

numbers[5] = 11;

let acc2 = 0;

for (let i = 0; i < numbers.length; i++) {
	acc2 += numbers[i] / numbers.length;
}

console.log(acc2);

// c)

let acc3 = 0;

function average(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		acc3 += numbers[i] / numbers.length;
	}
	return acc3;
}

console.log(average(numbers));
