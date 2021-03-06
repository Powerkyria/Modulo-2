'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_10_peticiones_al_servidor#ejercicio-3

const name = document.querySelector('.userName');
const repos = document.querySelector('.repoNumber');
const img = document.querySelector('img');
const btn = document.querySelector('button');

function getGithubUser() {
  let data = document.querySelector('input').value;
  fetch(`https://api.github.com/users/${data}`)
  .then(response => response.json())
  .then(data => {
		name.innerHTML = data.name;
		repos.innerHTML = data.public_repos;
		img.src = data.avatar_url;
		img.alt = 'Avatar';
	});
}

btn.addEventListener('click', getGithubUser);
