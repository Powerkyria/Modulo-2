'use strict';

function getEl(x) {
	const selector = document.querySelector(x);

	if (selector === null) {
		console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
	} else {
		return console.log(selector.innerHTML);
	}
}
getEl('.number');

const myNumber = parseInt(getEl('.number'));

function ejercicio(x) {
	if (x % 2 === 0) {
		return console.log('Este numero es PAR');
	} else {
		return console.log('Este numero es IMPAR');
	}
}

ejercicio(myNumber);
