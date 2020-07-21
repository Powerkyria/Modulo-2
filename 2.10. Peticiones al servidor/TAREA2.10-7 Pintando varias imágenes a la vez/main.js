'use strict'

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


