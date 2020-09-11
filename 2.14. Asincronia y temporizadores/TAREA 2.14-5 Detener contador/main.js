'use strict';

// Vamos a modificar nuestra solución del ejercicio 2 para que, en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval.

let counter = 0;

const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');
	time.innerHTML = counter;

	if (counter === 12) {
		clearInterval(interval);
	}
};

let interval = setInterval(incrementAndShowCounter, 1000);
