'use strict';

// const isra = document.querySelector('.teacher--isra');
// const tuerto = document.querySelector('.teacher--tuerto');
// const nasi = document.querySelector('.teacher--nasi');
// const list = document.querySelector('.teacher');

// const ul = document.querySelector('.teachers');

// function favorite(event) {
// 	list = event.target.parentElement;

// 	list.classList.toggle('teacher--selected');

// 	const div = list.querySelector('.favorite');

// 	if (div.innerHTML === 'Añadir') {
// 		div.innerHTML = 'Quitar';
// 	} else if (div.innerHTML === 'Quitar') {
// 		div.innerHTML = 'Añadir';
// 	}
// }

// ul.addEventListener('click', favorite);



const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
const ul = document.querySelector('.teachers');

function favorite(event) {
	event.target.classList.toggle('teacher--selected');

	const div = event.target.querySelector('.favorite');

	if (div.innerHTML === 'Añadir') {
		div.innerHTML = 'Quitar';
	} else if (div.innerHTML === 'Quitar') {
		div.innerHTML = 'Añadir';
	}
}

ul.addEventListener('click', favorite);



