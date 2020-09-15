'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_13_metodos_funcionales_array#ejercicio-1

const marks = [5, 4, 6, 7, 9];

const inflatedMarks= marks.map (marks => marks+1);

console.log(inflatedMarks);