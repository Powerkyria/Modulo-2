'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_3_condicionales#ejercicio-1

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';

const userImg = document.querySelector('.user__avatar');

userImg.src = userAvatar || DEFAULT_AVATAR;

// Esto tb funciona:

// userImg.setAttribute('src', userAvatar || DEFAULT_AVATAR);
