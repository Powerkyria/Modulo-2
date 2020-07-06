'use strict';

const links = document.querySelectorAll('a');

function disablelinkNav(event) {
	event.preventDefault();
}

// Iteramos sobre todos los links para añadirles a cada uno un event listener

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', disablelinkNav);
}
