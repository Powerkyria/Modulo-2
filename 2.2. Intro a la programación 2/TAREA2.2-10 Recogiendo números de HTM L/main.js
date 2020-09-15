"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_2_intro_a_la_programacion_2#ejercicio-10

const horasAño = 24 * 365;

const edad = document.querySelector('p');

const horasDeVida = horasAño * parseInt(edad.innerHTML);

console.log(`Has vivido ${horasDeVida} horas`);
