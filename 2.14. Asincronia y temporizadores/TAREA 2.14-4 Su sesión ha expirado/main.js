'use strict';

// Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).

const modal = document.querySelector('.modal');

const message = document.querySelector('p');

const showModal = () => {
	message.innerHTML = 'Su sesión ha expirado';
	modal.classList.remove('hidden');
};

setTimeout(showModal, 15000);
