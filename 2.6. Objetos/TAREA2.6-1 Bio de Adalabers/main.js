"use strict";

const adalaber1 = {
	name: 'Susana',
	age: 34,
	job: 'periodista'
};

// PINTADO EN LA CONSOLA:

// console.log(`Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`);

const adalaber2 = {
	name: 'Rocio',
	age: 25,
	job: 'actriz'
};

// PINTADO EN EL HTML

// Mostramos información en el HTML
// Voy a poner las descripciones de los objetos en el innerHTML del elemento div con clase "description"

const div = document.querySelector('.description');

//Le pongo titulo

div.innerHTML = '<h1>Probando objetos</h1>';

// Añado primera descripción con operador += --> "a lo que ya tengo, le añado para que no me borre el titulo)

div.innerHTML += `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}</p>`;

// Añado segunda descripción (operador += --> "a lo que ya tengo, añade esto:)

div.innerHTML += `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}</p>`;

// PINTADO DIRECTAMENTE EN EL CUERPO DE LA PAG WEB

// document.body.innerHTML = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}</p>`;
