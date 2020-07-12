'use strict';

const buttons = document.querySelectorAll('button');

function alarm() {
	document.body.classList.toggle('red');
}

// Iteramos sobre todos los botones para añadirles a cada uno un event listener

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', alarm);
}
