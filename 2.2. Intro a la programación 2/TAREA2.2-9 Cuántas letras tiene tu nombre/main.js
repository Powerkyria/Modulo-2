"use strict";

const name = 'Esther Colero';

const newElement = document.querySelector('p');

const textToShow2 = `El nombre de mi compañera es ${name}, y está compuesto por ${name.length} caracteres.`;

newElement.innerHTML = `${textToShow2}`;
