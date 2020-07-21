'use strict';

function getNumber() {
	fetch('https://api.rand.fun/number/integer')
		.then(response => response.html())
		.then(data => {
			const paragraph = document.querySelector('.result');
			paragraph.innerHTML = data.result;
		})
		.catch((error) => console.log(`Ha sucedido un error: ${error}`));
}
const btn = document.querySelector('.number');
btn.addEventListener('click', getNumber);
