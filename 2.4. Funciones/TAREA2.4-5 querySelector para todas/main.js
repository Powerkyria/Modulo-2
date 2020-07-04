'use strict';

function getEl(x) {
	const selector = document.querySelector(x);
	return selector;
}
const btnEl = getEl('.btn');

console.log(btnEl.innerHTML);
