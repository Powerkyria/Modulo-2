'use strict';

const news = [
	{
		title: 'Asteroids 101',
		image: 'https://via.placeholder.com/200x100',
	},
	{
		title: 'Life on Mars',
		image: 'https://via.placeholder.com/200x100',
	},
	{
		title: 'Martians invade Earth',
		image: 'https://via.placeholder.com/200x100',
	},
	{
		title: "Humans aren't real",
		image: 'https://via.placeholder.com/200x100',
	},
	{
		title: 'Space The Final Frontier',
		image: 'https://via.placeholder.com/200x100',
	},
];

// 1

const ul = document.querySelector('.news');
const list = document.createElement('li');

function listNews() {
	for (let i = 0; i < news.length; i++) {
		const list = document.createElement('li');
		list.classList.add('news__item');

		const title = document.createElement('h2');
		title.classList.add('news__title');
		const titleContent = document.createTextNode(news[i].title);
		title.appendChild(titleContent);

		const img = document.createElement('img');
		img.classList.add('news__image');
		const imageContent = news[i].image;

		img.src = imageContent;
		img.alt = news[i].title;

		list.appendChild(title);
		list.appendChild(img);

		ul.appendChild(list);
	}

	// console.log(news);
}
listNews();

// 2

const li = document.querySelectorAll('li');
const h2 = document.querySelectorAll('h2');

let planetTitle;

function marte() {
	for (let i = 0; i < li.length; i++) {
		if (li[i].classList.contains('news__item')) {
			planetTitle = li[i].textContent;
			// console.log(planetTitle);

			if (planetTitle.includes('Mars') || planetTitle.includes('Martians')) {
				li[i].classList.add('news__item--from-mars');
			}
		}
	}
}

marte();

// 3

const ul2 = document.createElement('ul');

function fetchInvisible() {
	fetch(
		'http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/news.json'
	)
		.then((response) => response.json())
		.then((data) => {
			const content = data.news;

			// console.log(content);

			for (let i = 0; i < content.length; i++) {
				// console.log(content[i].title);
				// console.log(content[i].image);

				const title = document.createElement('h2');
				title.classList.add('news__title');
				const newContent = document.createTextNode(content[i].title);
				title.appendChild(newContent);

				const img = document.createElement('img');
				img.classList.add('news__image');

				img.src = content[i].image;
				img.alt = content[i].title;

				const li = document.createElement('li');

				li.classList.add('news__item', 'news__item--no-image-visible');

				li.appendChild(title);
				li.appendChild(img);

				ul2.classList.add('visible');
				document.body.appendChild(ul2);
				ul2.appendChild(li);

				// 4

				function showImg() {
					li.classList.toggle('news__item--no-image-visible');
				}

				li.addEventListener('click', showImg);
			}
		});
}

fetchInvisible();

// 5

const divWrapper = document.createElement('div');

function getColors() {
	fetch(
		'http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palette.json'
	)
		.then((response) => response.json())
		.then((data) => {
			const palette = data.palettes;

			// const divWrapper = document.createElement('div');
			divWrapper.classList.add('div__wrapper');
			document.body.appendChild(divWrapper);

			const name = document.createElement('h3');
			const nameContent = document.createTextNode(palette[0].name);
			name.appendChild(nameContent);
			divWrapper.appendChild(name);

			// console.log(palette[0].colors);

			const fiveColors = palette[0].colors;

			for (let i = 0; i < fiveColors.length; i++) {
				const div = document.createElement('div');
				div.classList.add('color__item');
				div.style.backgroundColor = `#${fiveColors[i]}`;
				divWrapper.appendChild(div);
			}
		});
}
getColors();

// 6

// const divWrapper2 = document.createElement('div');

function moreColors() {
	fetch(
		'https://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palettes.json'
	)
		.then((response) => response.json())
		.then((data) => {
			const palette2 = data.palettes;

			const divWrapper2 = document.createElement('div');
			divWrapper2.classList.add('div__wrapper2');
			document.body.appendChild(divWrapper2);

			for (let i = 0; i < palette2.length; i++) {
				// console.log(palette2[i].name);

				const name2 = document.createElement('h3');
				const nameContent2 = document.createTextNode(palette2[i].name);
				name2.appendChild(nameContent2);

				divWrapper2.appendChild(name2);

				const newPalette = palette2[i].colors;
				// console.log(newPalette);

				for (let i = 0; i < newPalette.length; i++) {
					const div2 = document.createElement('div');
					div2.classList.add('color__item');
					div2.style.backgroundColor = `#${newPalette[i]}`;
					divWrapper2.appendChild(div2);

					// 7

					function markColor() {
						div2.classList.toggle('mark');
					}

					div2.addEventListener('click', markColor);
				}
			}
		});
}
moreColors();

// 8 SIN TERMINAR-UBICAR INPUT BIEN DENTRO DEL DOM

const inputSearch = document.createElement('input');
inputSearch.type = 'search';
inputSearch.setAttribute('placeholder', 'Buscar...');
inputSearch.setAttribute('class', 'searchFilter');
document.body.appendChild(inputSearch);

// function searchPalette() {
// 	let array = [];

// 	divWrapper2.forEach((el) => {
// 		console.log(inputSearch.value);

// 		if (el === inputSearch.value) {
// 			array = el;
// 		}
// 	});
// 	{
// 	}
// }
// searchPalette();

// function searchPalette() {
// 	let array = [];

// 	for (let i = 0; i < name2.length; i++) {
// 		// console.log(inputSearch);

// 		if (name2 === inputSearch.value) {
// 			array = divWrapper2;
// 		}else{
// 			divWrapper2.classList.add('hidden')
// 		}
// 	};
// 	{
// 	}
// }
// searchPalette();

// function searchPalette() {
// 	let array = [];

// 	divWrapper2.forEach((el) => {
// 		console.log(el);
// 		if (divWrapper2.textContent === inputSearch.value) {
// 			array = divWrapper2;
// 		}
// 	});
// 	{
// 	}
// }
// searchPalette();

// 9
