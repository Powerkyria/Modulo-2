"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_2_intro_a_la_programacion_2#ejercicio-9

const name = 'Esther Colero';

const newElement = document.querySelector('p');

const textToShow2 = `El nombre de mi compañera es ${name}, y está compuesto por ${name.length} caracteres.`;

newElement.innerHTML = `${textToShow2}`;
