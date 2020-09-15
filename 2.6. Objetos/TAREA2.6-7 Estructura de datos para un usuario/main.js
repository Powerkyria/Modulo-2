'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_6_objetos#ejercicio-7

const job = 'developer';

const user = {
	firstName: 'Carmen',
	lastName: 'Rivero',
	age: 40,
	job: job
};

// Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto.

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age + ' años');
console.log(user.job);

// TB SE PUEDE PONER ASI AUNQUE APARECERIA LA PROPIEDAD Y NO SOLO EL VALOR:

// console.log(user);

// Cambiaremos el nombre del usuario por otro distinto

user.firstName = 'Lucia';

console.log(user.firstName);

// Aumentaremos en 1 la edad del usuario

user.age += 1;

console.log(user.age);

// MISMO EJERCICIO MAS SIMPLIFICADO

// "use strict";

// const user = {};
// const job = "developer";

// user.firstName = "Carmen";
// user.lastName = "Rivero";
// user.age = 36;
// user.job = job;

// console.log(user);

// user.firstName = "María";
// user.age = user.age + 1;

// console.log(user);
