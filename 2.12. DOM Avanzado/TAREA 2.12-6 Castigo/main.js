'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_12_dom_avanzado#ejercicio-6

function createElement() {
	for (let i = 0; i < 100; i++) {
		const createParagraph = document.createElement('p');
		const sentence = document.createTextNode(
			'He aprendido bien cómo funcionan los bucles'
		);
		createParagraph.appendChild(sentence);
		document.body.appendChild(createParagraph);

		const select = document.createElement('select');
		select.id = i;
		select.value = createParagraph.appendChild(select);

		const colors = [ 'blanco', 'azul', 'rojo', 'verde', 'amarillo', 'rosa' ];

		for (let k = 0; k < colors.length; k++) {
			const option = document.createElement('option');
			const newContent = document.createTextNode(colors[k]);
			option.appendChild(newContent);
			select.appendChild(option);
		}
		select.addEventListener('change', changeColor);
	}
}
createElement();

function changeColor(e) {
	let choose = e.target.selectedIndex;
	let paragraph = document.querySelectorAll('p')[e.target.id];

	if (choose === 0) paragraph.style.color = 'white';
	else if (choose === 1) paragraph.style.color = 'blue';
	else if (choose === 2) paragraph.style.color = 'red';
	else if (choose === 3) paragraph.style.color = 'green';
	else if (choose === 4) paragraph.style.color = 'yellow';
	else paragraph.style.color = 'deeppink';
}
