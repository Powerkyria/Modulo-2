'use strict;';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-9

const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');

function favorite(event) {
	event.currentTarget.classList.toggle('teacher--selected');

	const div = event.currentTarget.querySelector('.favorite');

	if (div.innerHTML === 'Añadir') {
		div.innerHTML = 'Quitar';
	} else if (div.innerHTML === 'Quitar') {
		div.innerHTML = 'Añadir';
	}
}

isra.addEventListener('click', favorite);
tuerto.addEventListener('click', favorite);
nasi.addEventListener('click', favorite);
