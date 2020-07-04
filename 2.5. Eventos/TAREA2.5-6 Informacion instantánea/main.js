'use strict;';

const input = document.querySelector('.input');
const text = document.querySelector('.text');

function element(event) {
	text.innerHTML = event.currentTarget.value;
}
input.addEventListener('keyup', element);
