'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_4_funciones#ejercicio-10

function calculator (borderBox, width, padding, borderSize) {
  
  let totalWidth;

if (borderBox === true){
  totalWidth = width;
} 
  else if (borderBox === false){
   totalWidth = width + padding * 2 + borderSize * 2;

  }

return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${totalWidth}px.`
}

const box = calculator(false, 30, 1, 1);

console.log(box);


