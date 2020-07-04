'use strict;';

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
