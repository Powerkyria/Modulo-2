'use strict';

const rainbow = document.querySelector('div');

// Si contiene la clase warning...
if (rainbow.classList.contains('warning')) {
	document.querySelector('h1').innerHTML = 'AVISO';
	document.querySelector('p').innerHTML = 'Tenga cuidado';
}

// Si contiene la clase error...
if (rainbow.classList.contains('error')) {
	document.querySelector('h1').innerHTML = 'ERROR';
	document.querySelector('p').innerHTML = 'Ha surgido un error';
}

// Si contiene la clase success...
if (rainbow.classList.contains('success')) {
	document.querySelector('h1').innerHTML = 'CORRECTO';
	document.querySelector('p').innerHTML = 'Los datos son correctos';
}
