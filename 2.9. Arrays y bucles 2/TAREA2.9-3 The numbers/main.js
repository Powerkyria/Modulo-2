'use strict';

const lostNumbers = [ 4, 8, 15, 16, 23, 42 ];

const evenNumber= [];

const multipleOfThree = [];

function bestLostNumber() {
	for (let i = 0; i < lostNumbers.length; i++) {

		if (lostNumbers[i] % 2 === 0) {
			evenNumber.push(lostNumbers[i]);
		}
	}
	console.log(evenNumber);

	for (let i = 0; i < lostNumbers.length; i++) {
		if (lostNumbers[i] % 3 === 0) {
			multipleOfThree.push(lostNumbers[i]);
		}
	}
	console.log(multipleOfThree);

	const result = evenNumber.concat(multipleOfThree);

	console.log(result);
}

bestLostNumber();
