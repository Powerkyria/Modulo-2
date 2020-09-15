'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const saludo= names.map (names => `Bienvenida ${names}`);

console.log(saludo);