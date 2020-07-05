'use strict';

// a)

const numbers = [ 2, 3, 8, 6, 10 ];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
	acc += numbers[i] / 5;
}

console.log(acc);

// RECUERDA
// acc += numbers[i] es igual a poner acc = acc + numbers[i]

// b)

numbers[5] = 11;

let acc2 = 0;

for (let i = 0; i < numbers.length; i++) {
	acc2 += numbers[i] / 6;
}

console.log(acc2);

// c)

let acc3 = 0;

function average(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		acc3 += numbers[i] / 5;
	}
	return acc3;
}

console.log(average([ 2, 3, 8, 6, 10 ]));
