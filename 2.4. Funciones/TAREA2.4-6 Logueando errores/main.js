'use strict';

function getEl(x) {
	const selector = document.querySelector(x);

	if (selector === null) {
		console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
	} else {
		return console.log(selector.innerHTML);
	}
}
getEl('.titulo');
