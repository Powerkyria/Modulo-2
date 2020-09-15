'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_7_arrays_y_bucles#ejercicio-1

const movies = [ 'Contratiempo', 'Bala perdida', 'La ola' ];

movies[3] = 'El aviso';
movies[0] = 'Overdriver';
movies[2] = 'La suerte de los Logan';

function workWithMovies() {
	return movies;
}
console.log(workWithMovies());
