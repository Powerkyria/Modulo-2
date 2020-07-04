'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector('.start');

function printMovies() {

	// El + al lado del igual hace que se añada el contenido sin que desaparezca el boton.

	document.querySelector('body').innerHTML += `<ul>
    <li class="inception">${inception}</li>
    <li class="butterfly">${theButterFlyEffect}</li>
    <li class="sunshine">${eternalSunshineOfTheSM}</li>
    <li class="velvet">${blueVelvet}</li>
    <li class="split">${split}</li>
</ul>`;

	// IMPORTANTE: las películas NO EXISTEN hasta que no hacemos click en el botón, que las pinta en el documento HTML. Si definimos las variables fuera de esa función, el navegador intentará crearlas al cargar la página y les asignará un valor de NULL porque las pelis NO EXISTEN hasta que no damos CLICK al botón. 
	
	// ¿Qué hacemos entonces?

	// 1. Crear las constantes una vez la función printMovies se ejecuta, es decir dentro de la funcion o

	// 2. Declarar VARIABLES al principio del documento y ASIGNARLES el valor de referencia a la peli una vez se ejecuta la función printMovies.

	const inceptionEl = document.querySelector('.inception');
	const butterflyEl = document.querySelector('.butterfly');
	const sunshineEl = document.querySelector('.sunshine');
	const velvetEl = document.querySelector('.velvet');
	const splitEl = document.querySelector('.split');

	function movieClick(event) {
		console.log(event.currentTarget.innerHTML);
	}

	// Para esta parte tenemos que ponerle un eventlistener a cada película, que deben esperar un 'click' para entonces hacer un console.log con el nombre de la peli. Para hacer esto primero debemos crear constantes dentro de la funcion que hagan referencia a dichas películas o declarar sus variables al principio del documento.

	inceptionEl.addEventListener('click', movieClick);
	butterflyEl.addEventListener('click', movieClick);
	sunshineEl.addEventListener('click', movieClick);
	velvetEl.addEventListener('click', movieClick);
	splitEl.addEventListener('click', movieClick);
}

button.addEventListener('click', printMovies);
