'use strict';

for (let i = 1; i <= 100; i++) {
	let word = fizzBuzz().generate(i);
	console.log(word);
}

// function generateFizzBuzzWord(number) {
// 	if (isFizz(number) && isBuzz(number)) {
// 		return 'FizzBuzz';
// 	}
// 	if (isBuzz(number)) {
// 		return 'Buzz';
// 	}
// 	if (isFizz(number)) {
// 		return 'Fizz';
// 	}
// 	return number;
// }

// function isBuzz(number) {
// 	return number % 5 === 0 || number.toString().includes('5');
// }
// function isFizz(number) {
// 	return number % 3 === 0 || number.toString().includes('3');
// }

function fizzBuzz() {
	return {
		generate: generateFizzBuzzWord
	};
	function generateFizzBuzzWord(number) {
		if (isFizz(number) && isBuzz(number)) {
			return 'FizzBuzz';
		}
		if (isBuzz(number)) {
			return 'Buzz';
		}
		if (isFizz(number)) {
			return 'Fizz';
		}
		return number;
	}

	function isBuzz(number) {
		return number % 5 === 0 || number.toString().includes('5');
	}
	function isFizz(number) {
		return number % 3 === 0 || number.toString().includes('3');
	}
}
