'use strict';

const input = document.querySelector('.name');
const text = document.querySelector('.text');

function writeText() {
	text.innerHTML = input.value;
	localStorage.setItem('name', text.innerHTML);
}

input.addEventListener('keyup', writeText);

function getName(){
	const keep = localStorage.getItem('name');
	text.innerHTML = keep;
	input.value = keep;
}

getName();

// Escribiendo solo esto tb funciona:

// const keep = localStorage.getItem('name');
// text.innerHTML = keep;
// input.value = keep;