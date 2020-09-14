'use strict';

const links = document.querySelectorAll('a');

function doScroll(e) {
	const attribute = e.target.dataset.id;

	if (attribute === 'firstSection') {
		window.scrollTo(0, 0);
	} else if (attribute === 'secondSection') {
		window.scrollTo(0, 750);
	} else if (attribute === 'thirdSection') {
		window.scrollTo(0, 1770);
	}
}

function getScroll() {
	for (let i = 0; i < links.length; i++) {
		console.log(links[i]);
		links[i].addEventListener('click', doScroll);
		const position = links[i].getBoundingClientRect();
		console.log(position);
	}
}
getScroll();
