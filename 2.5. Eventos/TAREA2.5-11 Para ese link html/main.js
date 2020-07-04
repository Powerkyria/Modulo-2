'use strict';

const links = document.querySelectorAll('.ancla');

function disablelinkNav(event) {
	event.preventDefault();
}

//La siguiente estructura no lo entiendi muy bien, la tuve que buscar xq no me salia el ejercicio

links.forEach((link) => {
	link.addEventListener('click', disablelinkNav);
});
