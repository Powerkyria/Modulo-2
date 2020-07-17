'use strict';

const name = document.querySelector('.userName');
const repos = document.querySelector('.repoNumber');
const img = document.querySelector('img');


function getGithubUser() {
  let data = document.querySelector('input').value;
  fetch(`https://api.github.com/users/${data}`)
  .then((response) => response.json())
  .then((data) => {
		name.innerHTML = data.name;
		repos.innerHTML = data.public_repos;
		img.src = data.avatar_url;
		img.alt = 'Avatar';
	});
}
const btn = document.querySelector('button');
btn.addEventListener('click', getGithubUser);
