"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-9

const ejercicio = x => {
	if (x % 2 === 0) {
		return console.log('Este numero es PAR ');
	}
	else {
		return console.log('Este numero es IMPAR');
	}
};
ejercicio(23);