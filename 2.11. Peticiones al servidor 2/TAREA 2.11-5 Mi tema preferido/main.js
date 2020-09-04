'use strict';

const inputLight = document.getElementById('light');
const inputDark = document.getElementById('dark');

function select() {
	if (inputLight.checked) {
		document.body.classList.add('light');
		document.body.classList.remove('dark');
		localStorage.setItem('value', inputLight.value);
	}
	if (inputDark.checked) {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
		localStorage.setItem('value', inputDark.value);
	}
}

inputLight.addEventListener('change', select);
inputDark.addEventListener('change', select);

function getValue() {
	const value = localStorage.getItem('value');
	document.body.classList.add(value);
}

getValue();
