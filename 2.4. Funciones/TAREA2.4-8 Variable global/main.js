'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
	secretLetter = 'x';
	return secretLetter;
}

// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

// prueba a cambiar el orden de los console.log. 

// ¿Qué está pasando?

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"

// ¿Por qué no se imprime en la consola 2 veces "x"?

// Porque no hemos ejecutado aún la función que cambia la variable secretLetter dentro del bloque, entonces nos devuelve 'y' porque así está definida fuera del bloque.
