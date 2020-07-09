'use strict';

// Array con objetos dentro

const contacts = [
	{
		name: 'Maria',
		age: 29,
		job: 'diseñadora'
	},
	{
		name: 'Lucia',
		age: 31,
		job: 'ingeniera química'
	},
	{
		name: 'Susana',
		age: 34,
		job: 'periodista'
	},
	{
		name: 'Rocio',
		age: 25,
		job: 'actriz'
	},
	{
		name: 'Inmaculada',
		age: 21,
		job: 'diseñadora'
	}
];

// 1.Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers() {
	return contacts.length;
}
console.log(countAdalabers());

// 2.Una función averageAge que devuelve la media de edad de listado.

let edadMedia = 0;

function averageAge() {
	for (let i = 0; i < contacts.length; i++) {
		edadMedia += contacts[i].age;
	}
	return edadMedia / contacts.length;
}

console.log(averageAge());

// 3.Una función theYoungest que devuelve el nombre de la adalaber más joven.
// let youngest

// function theYoungest() {
// 	for (let i = 0; i < contacts.length; i++) {
// 		
// 	}
// 	return;
// }

// console.log(theYoungest());



// 4.Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

 // Creamos variable que indica el número de diseñadores. Empezamos en 0.

let numberOfDesigners = 0;

function countDesigners() {
	for (let i = 0; i < contacts.length; i++) {

		 // Si el trabajo de una adalaber es diseñadora, incrementa el valor de numberOfDesigners en 1

		if (contacts[i].job === 'diseñadora') {
			numberOfDesigners++;
		}
	}

	return numberOfDesigners;
}
console.log(countDesigners());
