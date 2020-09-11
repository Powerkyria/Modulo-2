'use strict';

// Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".

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
