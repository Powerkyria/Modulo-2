'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_9_array_y_bucles_2#ejercicio-1

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_9_array_y_bucles_2#ejercicio-2

// Ejercicio 1 Numeritos

const array = [];

function get100Numbers() {
	for (let i = 1; i <= 100; i++) {
		array.push(i);
	}
	return console.log(array);
}

// Ejercicio 2 Sotiremun

get100Numbers();

function getReversed100Numbers(){
return console.log (array.reverse());

}

getReversed100Numbers()