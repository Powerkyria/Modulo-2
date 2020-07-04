'use strict;';

const div = document.querySelector('.content');

function changeColor() {
	if (window.scrollY >= 250) {
		div.style = 'background-color: skyblue';
	} else {
		div.style = 'background-color: yellow';
	}
}

window.addEventListener('scroll', changeColor);
