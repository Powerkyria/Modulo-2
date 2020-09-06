'use strict';

const select = document.querySelector('#Ciudades');
const image = document.querySelector('.imagen1');
const image2 = document.querySelector('.imagen2');
const image3 = document.querySelector('.imagen3');

function showPicture() {
	if (select.value === 'Madrid') {
		image.src = './image/md.jpg';
		image2.src = './image/md2.jpg';
        image3.src = './image/md3.jpg';
        
	} else if (select.value === 'Paris') {
		image.src = './image/paris.jpg';
		image2.src = './image/paris2.jpg';
        image3.src = './image/paris3.jpg';
        
	} else if (select.value === 'NewYork') {
		image.src = './image/ny.jpg';
		image2.src = './image/ny2.jpg';
		image3.src = './image/ny3.jpg';
	}
}
select.addEventListener('change', showPicture);
