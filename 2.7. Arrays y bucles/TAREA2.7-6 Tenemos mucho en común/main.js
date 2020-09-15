'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_7_arrays_y_bucles#ejercicio-6

const button = document.querySelector('.send');

function favorite() {
	// Las constantes que recogen el valor del input las declaramos dentro de la funcion
	// porque hasta que no le damos al botón no existen

	const info1 = document.querySelector('.info1').value;
	const info2 = document.querySelector('.info2').value;
	const info = [ info1, info2 ];

	for (const data of info) {
		let newParagraph = document.createElement('h3');

		newParagraph.innerText = `¡A mí también me encantó "${data}"! Tenemos mucho en común, humana.`;

		document.body.appendChild(newParagraph);
	}
}
button.addEventListener('click', favorite);
