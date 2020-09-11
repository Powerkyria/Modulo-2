'use strict';

// Este contador empezará en 0 y cada segundo incrementará en 1, así hasta 12, en ese momento terminará la cuenta y se dejará de contar más.
// La cuenta se mostrará en la pantalla con números y si lo deseas puedes añadir una imagen de una uva cada vez que pase un segundo.
// PISTA: la función se puede seguir ejecutando con setInterval pero para que se pare en 12 basta con dejar de pintar en el HTML en el momento adecuado.

const img = document.querySelector('img');

let counter = 0;

const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');
	time.innerHTML = counter;

	img.src = './image/uvas.jpg';
	// ARREGLAR PARA QUE SEA UNA IMAGEN CADA SEGUNDO
	if (counter === 12) {
		clearInterval(intervalo);
		img.src = './image/feliz.gif';
	}
};

let intervalo = setInterval(incrementAndShowCounter, 1000);
