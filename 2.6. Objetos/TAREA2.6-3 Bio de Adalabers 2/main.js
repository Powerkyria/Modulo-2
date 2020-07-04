'use strict';

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
