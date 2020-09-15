'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-5

const pins = [ 2389, 2384, 2837, 5232, 8998 ];
const even = pins.filter((pins) => pins % 2 === 0);

console.log(even);
