'use strict';

const btn = document.querySelector('button');

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message)
         return fetch('https://api.rand.fun/number/integer?max=93')
     
.then(numberResponse => numberResponse.json())
.then (numberData => {
    
    const randomNumber = numberData.result;
    const dogBreed = breeds[randomNumber];

    return fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)

    .then(picResponse => picResponse.json())
    .then(picData => {
        const dogImage = picData.message;
        const image = document.querySelector('img');
        const name = document.querySelector('h1');

        // Pintar
        image.src = dogImage;
        name.innerHTML = dogBreed;
    })
}) 
    
})
}
btn.addEventListener('click', getBreeds);
