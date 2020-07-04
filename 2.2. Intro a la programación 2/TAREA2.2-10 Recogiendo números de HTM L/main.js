"use strict";

const horasAño = 24 * 365;

const edad = document.querySelector('p');

const horasDeVida = horasAño * parseInt(edad.innerHTML);

console.log(`Has vivido ${horasDeVida} horas`);
