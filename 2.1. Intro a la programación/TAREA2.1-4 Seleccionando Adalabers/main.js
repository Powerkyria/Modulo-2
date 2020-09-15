"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_1_intro_a_la_programacion#ejercicio-4


// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()

const titleElement = document.querySelector('h1');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida

titleElement.innerHTML = titleElement.innerHTML + '  fulanita';
