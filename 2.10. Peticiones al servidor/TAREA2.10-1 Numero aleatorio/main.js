'use strict';

function getNumber() {
    fetch("https://api.rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.result').innerHTML = data.result
      });
  }
  document.querySelector('.number').addEventListener("click", getNumber);