'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_14_asincronia#ejercicio-4

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const message = document.querySelector('p');

const showModal = () => {
	message.innerHTML = 'Su sesión ha expirado';
	modal.classList.remove('hidden');
	overlay.style.opacity = 1;
};

setTimeout(showModal, 15000);
