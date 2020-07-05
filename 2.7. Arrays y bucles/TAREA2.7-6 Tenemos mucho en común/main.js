'use strict';

const button = document.querySelector('.send');

function favorite() {

// Las constantes que recogen el valor del input las declaramos dentro de la funcion
// porque hasta que no le damos al botón no existen

	const info1 = document.querySelector('.info1').value;
	const info2 = document.querySelector('.info2').value;
	const info = [ info1, info2 ];

	for (const data of info) {
		console.log(`¡A mí también me encantó "${data}"! Tenemos mucho en común, humana.`);
	}
}
button.addEventListener('click', favorite);
