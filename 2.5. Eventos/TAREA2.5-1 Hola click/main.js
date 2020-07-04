'use strict';

// elemento de HTML
const button = document.querySelector('.click');
const parragraph = document.querySelector('.saludo');

// handler
function showText() {
	parragraph.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

// listener sobre el elemento, con tipo de evento y handler

button.addEventListener('click', showText);

// Con arrow function:

// "use strict";

// const button = document.querySelector('.click');
// const parragraph = document.querySelector(".saludo");

// button.addEventListener('click', () => parragraph.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!');
