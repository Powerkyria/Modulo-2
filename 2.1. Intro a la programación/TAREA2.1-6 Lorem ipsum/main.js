"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_1_intro_a_la_programacion#ejercicio-6

const listElements = document.querySelector('div');

const content =
	'<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

listElements.innerHTML = content;
