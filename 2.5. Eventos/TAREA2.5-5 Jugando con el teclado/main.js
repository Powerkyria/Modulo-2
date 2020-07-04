'use strict;';

function color(event) {
	const x = event.key;

	if (x === 'r' || x === 'R') {

		document.body.style = 'background-color: red';

	} else if (x === 'm' || x === 'M') {
		document.body.style.backgroundColor = 'purple';
	}
}

document.addEventListener('keydown', color);


// DOS MANERAS DE AÑADIR ESTILOS:


// document.body.style.backgroundColor = 'red';

// document.body.style = 'background-color: red';