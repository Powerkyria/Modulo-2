'use strict';

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
