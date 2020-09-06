'use strict';

// CON BUCLE FOR...OF

// // Selecciono todos los parrafos
// const p = document.querySelectorAll('p');
// //Recorro cada uno de ellos para obtener informacion
// for (const paragraph of p) {
// 	console.log(paragraph);

// 	// Recojo en una constante la altura de cada uno de ellos
// 	const height = paragraph.offsetHeight;

// 	console.log(height);

// 	// Les aplico un tercio de la altura que tenian en un inicio
// 	paragraph.style.height = `${height / 3}px`;
// }

// -----------------------------------------------------------------

// CON BUCLE FOR

const p = document.querySelectorAll('p');
//Recorro cada uno de ellos para obtener información
for (let i = 0; i < p.length; i++) {
	console.log(p);

	// Recojo en una constante la altura de cada uno de ellos
	const height = p[i].offsetHeight;

	console.log(height);

	// Les aplico un tercio de la altura que tenian en un inicio
	p[i].style.height = `${height / 3}px`;
}
