'use strict';

// Usando la herramienta loupe que se utiliza en el video (ver el vídeo), realizar en JavaScript las siguientes tareas para ver en qué orden se reproducen:

// TAREAS A

// Crear una función funA que contenga un console.log('hola')

const funA = () => {
	console.log('hola');
};

// Crear otra función funB que ejecute funA

const funB = () => {
	funA();
};

// Ejecutar la función funB

funB();

// RESPUESTA : Se reproducen de abajo hacia arriba, funB llama a funA y esta dice 'hola'.

/*************************************************************************************/

// TAREAS B

// En un if comprobar si "Hello" y "hello" son iguales
// Si lo son, ejecutar un console.log que diga "lo son"
// Si no lo son, ejecutar un console.log que diga "no lo son"

if ('Hello' === 'hello') {
	console.log('lo son');
} else {
	console.log('no lo son');
}

// RESPUESTA: No lo son.

/***************************************************************************************/

// TAREAS C

// Crear una función pulsado() que guarde en una variable el texto "pulsado" y luego muestre esa variable con un console.log
// Crear un botón que llame a la función anterior. Podemos editar el HTML en el panel inferior izquierdo. Usaremos una sintaxis propia del programa en lugar de addEventListener: $.on("button", "click", pulsado);
// Añadir un console.log al final que muestre el texto "empezamos"

const button = document.querySelector('button');

function pulsado() {
	const text = 'pulsado';
	console.log(text);
}

button.addEventListener('click', pulsado);

console.log('empezamos');

// ¿Sabrías explicar por qué se ejecutan en ese orden?
