'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_9_array_y_bucles_2#ejercicio-5-bonus

/*******************************************/

// PINTADO EN LA CONSOLA

// Creamos una función que admite un parámetro. Este parámetro equivale a la altura del árbol de navidad

// Creamos variable con triángulo
// Creamos variable tree vacía
// por cada vuelta le añadimos un triángulo al arbol

// let triangle = '▲';
// let tree = '';

// function drawTree(height) {
// 	for (let i = 0; i < height; i++) {
// 		tree += triangle;

// 		console.log(tree);
// 	}
// }

// drawTree(5);

// PINTADO EN PANTALLA, EJERCICIO CONSULTADO Y RETOCADO A MI GUSTO:

let tree = '';
let triangle = '▲';

function makeTree(heigth) {
	for (let i = 0; i < heigth; i++) {
		let newParagraph = document.createElement('p');

		newParagraph.innerText = tree += triangle;

		document.body.appendChild(newParagraph);
	}
}
makeTree(5);
