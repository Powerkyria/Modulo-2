'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
	counter++;
	const time = document.querySelector('.time');
	time.innerHTML = `Escrito hace ${counter} segundos`;

	if (counter > 59) {
		let min = Math.trunc(counter / 60);

		time.innerHTML = `Escrito hace ${min} minuto y ${counter -
			60 * min} segundos`;
	}
};

setInterval(incrementAndShowCounter, 1000);
