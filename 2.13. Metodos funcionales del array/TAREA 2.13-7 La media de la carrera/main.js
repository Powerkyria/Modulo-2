'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-7

const times = [ 56, 9, 45, 28, 35 ];

const average = times.reduce((acc, number) => acc + number, 0) / times.length;

console.log(average);
