'use strict'

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_10_peticiones_al_servidor#ejercicio-6

// El enlace no esta ajustado al ejercicio

// Partiendo el ejemplo anterior, vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo pida 10, y el resultado sólo se pinte en la pantalla cuando las 10 imágenes hayan llegado del servidor. Ahora sí que se nota el efecto de que se pintan todas a la vez, ¿verdad? Vamos a probar también con 25 imágenes, para ver bien este efecto.

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages() {
    
    // Creo un array promises vacío
    const promises = [];
    // le añado con un loop for 10 elementos iguales que son "createPromise()" para no tener que añadir manualmente const promises = [createPromise(), createPromise(), ....] 10 veces
    for (let i = 0; i < 10; i++) {
        promises[i] = createPromise();
    }
  
  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
        const img = document.querySelector('.dog' + (i + 1));
        img.src = responses[i].message;
        img.alt ='dog'
      }
    });
}
const btn = document.querySelector('button');
btn.addEventListener('click', getBreedImages);


