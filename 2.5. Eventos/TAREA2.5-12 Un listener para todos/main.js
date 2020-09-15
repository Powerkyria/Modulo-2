'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-12-bonus

const ul = document.querySelector('.teachers');

ul.addEventListener('click', (event) => {
	if (event.target !== ul) {
		event.target.classList.toggle('teacher--selected');

		const div = event.target.querySelector('.favorite');

		if (div.innerHTML === 'Añadir') {
			div.innerHTML = 'Quitar';
		} else if (div.innerHTML === 'Quitar') {
			div.innerHTML = 'Añadir';
		}
	}
});
