'use strict';

const players = [
	{
		name: 'Ryu',
		surname: 'Gonzalez',
		number: 666999111,
	},
	{
		name: 'Chun-Li',
		surname: 'Hernandez',
		number: 666555444,
	},
	{
		name: 'Guille',
		surname: 'Ruiz',
		number: 666777888,
	},
];

const select = document.getElementById('player');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputNumber = document.getElementById('number');

function choosePlayer() {

    // Manera larga:

	// if (select.value === 'Ryu') {
	// 	inputName.value = players[0].name;
	// 	inputSurname.value = players[0].surname;
	// 	inputNumber.value = players[0].number;
	// } else if (select.value === 'Chun-Li') {
	// 	inputName.value = players[1].name;
	// 	inputSurname.value = players[1].surname;
	// 	inputNumber.value = players[1].number;
	// } else if (select.value === 'Guille') {
	// 	inputName.value = players[2].name;
	// 	inputSurname.value = players[2].surname;
	// 	inputNumber.value = players[2].number;
	// } else {
	// 	inputName.value = null;
	// 	inputSurname.value = null;
	// 	inputNumber.value = null;
	// }

    // Manera corta:
	for (let i = 0; i < players.length; i = i + 1) {
		if (players[i].name === select.value) {
			inputName.value = players[i].name;
			inputSurname.value = players[i].surname;
			inputNumber.value = players[i].number;
		}
	}
}
select.addEventListener('change', choosePlayer);
