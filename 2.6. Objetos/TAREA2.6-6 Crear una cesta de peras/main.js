'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_6_objetos#ejercicio-6

const pearsBasket = {
	max: 10,
	min: 1,
	current: 8,
	initial: 2,
	addPear: function() {
		return this.current + 1;
	},
	removePear: function() {
		return this.current - 1;
	},
	resetPear: function() {
		return this.initial;
	}
};

console.log(pearsBasket.addPear());
console.log(pearsBasket.removePear());
console.log(pearsBasket.resetPear());
