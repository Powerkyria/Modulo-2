'use strict';

const paragraph = document.querySelector('.lorem');

const newParagraph =
	'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eaque aut doloribus, fuga odio aperiam?';

function dameIpsum() {
	paragraph.innerHTML = `${paragraph.innerHTML} <p> ${newParagraph}</p>`;
}

paragraph.addEventListener('mouseover', dameIpsum);
