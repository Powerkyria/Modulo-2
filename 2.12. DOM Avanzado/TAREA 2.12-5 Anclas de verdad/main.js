'use strict';

const links = document.querySelectorAll('a');

function getScroll() {
	for (let i = 0; i < links.length; i++) {
		console.log(links[i]);

		const position = links[i].getBoundingClientRect();
		console.log(position);

		const attribute = links[i].getAttribute('data-id');
		console.log(attribute);

		if (attribute === 'firstSection') {
			window.scrollTo(43, 25);
		} else if (attribute === 'secondSection') {
			window.scrollTo(181, 420);
		} else if (attribute === 'thirdSection') {
			window.scrollTo(338, 815);
		}
	}
}
getScroll();

// links[i].addEventListener('click', getScroll);
