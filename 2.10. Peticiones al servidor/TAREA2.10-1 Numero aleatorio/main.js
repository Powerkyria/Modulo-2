'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_10_peticiones_al_servidor#ejercicio-1

function getNumber() {
    fetch("https://api.rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.result').innerHTML = data.result
      });
  }
  document.querySelector('.number').addEventListener("click", getNumber);