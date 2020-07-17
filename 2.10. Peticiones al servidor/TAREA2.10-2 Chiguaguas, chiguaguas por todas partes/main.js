'use strict';

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

function getMoreChihuahua() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector(".img2");
      img.src = data.message;
      img.alt = "Un perro";
    });
}
const btn2 = document.querySelector(".js-more_chihuahua");
btn2.addEventListener("click", getMoreChihuahua);