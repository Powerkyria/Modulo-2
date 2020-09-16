'use strict';

// https://github.com/Adalab/funciones-y-parametros-desde-cero


/***************** Fase 1 **********************/

function ten() {
	for (let i = 0; i < 10; i++) {
		console.log('patata');
	}
}

ten();

/***************** Fase 2 **********************/

function ten2(word) {
	for (let i = 0; i < 10; i++) {
		console.log(word);
	}
}

ten2('Patata');
ten2('Aguacate');
ten2('Pizza');

/***************** Fase 3 **********************/

function ten3(word, num) {
	for (let i = 0; i < num; i++) {
		console.log(word, num);
	}
}

ten3('patata', 10);
ten3('aguacate', 7);
ten3('Pizza', 50);

/***************** Fase 4 **********************/

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

function writeThis(word, num) {
	for (let i = 0; i < num; i++) {
		console.log(word, num);
	}
}

writeThis('patata', getRandomNumber(10));
writeThis('aguacate', getRandomNumber(10));
writeThis('pizza', getRandomNumber(10));

/***************** Fase 5 **********************/

const myWordList = [
	{
		text: 'Pencil',
		total: 6,
	},
	{
		text: 'Thermo',
		total: 2,
	},
	{
		text: 'TV',
		total: 8,
	},
	{
		text: 'Phone',
		total: 4,
	},
];

function writeMyArray(array) {
	for (let i = 0; i < array.length; i++) {
		writeThis(array[i].text, array[i].total);
	}
}

writeMyArray(myWordList);

/***************** Fase 6 **********************/

function getObject() {
	fetch('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js')
		.then((response) => response.json())
		.then((data) => {
			const content = data.results;

			console.log(content);

			for (let i = 0; i < content.length; i++) {
				writeThis(content[i].text, content[i].total);
			}
		});
}

getObject();
