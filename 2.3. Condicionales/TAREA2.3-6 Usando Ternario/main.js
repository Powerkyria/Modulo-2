'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-6

let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
	avocados = money / avocadoPrice;
} else {
	avocados = 0;
}

// Reescribe el código del ejemplo anterior (no del ejercicio anterior) utilizando un ternario en lugar de un if...else.

(money >= avocadoPrice) ? avocados = money / avocadoPrice : avocados = 0;
