'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-9

const runners = [
	{ name: 'Gregory Goyle', time: 56, student: true },
	{ name: 'Nymphadora Tonks', time: 9, student: false },
	{ name: 'Luna Lovegood', time: 45, student: true },
	{ name: 'Cedric Diggory', time: 28, student: true },
	{ name: 'Cho Chang', time: 35, student: true },
];

const winnerStudents = runners
	.filter((runners) => runners.student === true)
	.reduce((winner, runner) => {
		if (winner.time < runner.time) {
			return winner;
		} else {
			return runner;
		}
	});

console.log(winnerStudents);
