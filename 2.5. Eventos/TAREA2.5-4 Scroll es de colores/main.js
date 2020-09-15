'use strict;';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_5_eventos#ejercicio-4

const div = document.querySelector('.content');

function changeColor() {
	if (window.scrollY >= 250) {
		div.style = 'background-color: skyblue';
	} else {
		div.style = 'background-color: yellow';
	}
}

window.addEventListener('scroll', changeColor);
