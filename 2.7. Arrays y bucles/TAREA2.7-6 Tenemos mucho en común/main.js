'use strict';

const button = document.querySelector('.send');

function favorite() {
	const info1 = document.querySelector('.info1').value;
	const info2 = document.querySelector('.info2').value;
	const info = [ info1, info2 ];

	for (const data of info) {
		console.log(`¡A mí también me encantó "${data}"! Tenemos mucho en común, humana.`);
	}
}
button.addEventListener('click', favorite);
