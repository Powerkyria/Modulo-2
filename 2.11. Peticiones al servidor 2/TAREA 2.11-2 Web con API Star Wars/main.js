'use strict';

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
