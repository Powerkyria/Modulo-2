'use strict';

const button = document.querySelector('.btn');
const body = document.querySelector('body');
const select = document.querySelector('select');
const face = document.querySelector('.face');
const opt1 = document.querySelector('.happy');
const opt2 = document.querySelector('.sad');

function state() {
	face.innerHTML = select.value;
}

button.addEventListener('click', state);
