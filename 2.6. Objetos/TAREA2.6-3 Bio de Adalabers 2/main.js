'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_6_objetos#ejercicio-3

const adalaber1 = {
	name: 'Susana',
	age: 34,
	job: 'periodista',
	showBio: function() {
		return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
	}
};

console.log(adalaber1.showBio());

const adalaber2 = {
	name: 'Rocio',
	age: 25,
	job: 'actriz',
	showBio: function() {
		return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
	}
};
console.log(adalaber2.showBio());
