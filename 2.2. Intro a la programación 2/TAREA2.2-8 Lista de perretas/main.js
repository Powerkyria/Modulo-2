"use strict";

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_2_intro_a_la_programacion_2#ejercicio-8

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const list = document.querySelector('ul');

list.innerHTML = `
<li><img src="${firstDogImage}"> ${firstDogName}</li>
<li><img src="${secondDogImage}"> ${secondDogName}</li>
<li><img src="${thirdDogImage}"> ${thirdDogName}</li>`;
