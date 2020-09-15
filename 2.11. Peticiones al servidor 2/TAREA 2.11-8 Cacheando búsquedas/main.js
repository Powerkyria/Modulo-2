'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_11_peticiones_al_servidor_2#ejercicio-8

const btn = document.querySelector('button');
const ul = document.querySelector('.list');
const input = document.getElementById('name');

function search() {
	if (localStorage.getItem(input.value) !== null) {
		ul.innerHTML = JSON.parse(localStorage.getItem(input.value));

		console.log('Obtenido de la cache');
	} else {
		fetch(`https://swapi.dev/api/people/?search=${input.value}`)
			.then((response) => response.json())
			.then((data) => {
				const characters = data.results;
				let listContent = '';
				for (const character of characters) {
					listContent += `<li>${character.name}. Sex: ${character.gender}</li>`;
				}

				ul.innerHTML = listContent;

				localStorage.setItem(input.value, JSON.stringify(listContent));
			});

		console.log('Petición a la API');
	}
}
btn.addEventListener('click', search);
