'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-7-bonus

const year = 2020;

const leapYear = year % 4;

if (leapYear === 0) {
	console.log(year + 4);
} else if (leapYear === 1) {
	console.log(year + 3);
} else if (leapYear === 2) {
	console.log(year + 2);
} else if (leapYear === 3) {
	console.log(year + 1);
}
