'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-2


// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-3

const btn = document.querySelector('button');
const ul = document.querySelector('.list');
const input = document.getElementById('name');

function search() {
    fetch(`https://swapi.dev/api/people/?search=${input.value}`)
    .then((response) => response.json())
    .then((data) => {

		const characters = data.results;

		for (const character of characters) {
			ul.innerHTML += `<li>${character.name}. Sex: ${character.gender}</li>`;
		}
	});
}
btn.addEventListener('click', search);
