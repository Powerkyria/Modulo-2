'use strict';

const movies = [ 'Contratiempo', 'Bala perdida', 'La ola' ];

movies[3] = 'El aviso';
movies[0] = 'Overdriver';
movies[2] = 'La suerte de los Logan';

function workWithMovies() {
	return movies;
}
console.log(workWithMovies());
