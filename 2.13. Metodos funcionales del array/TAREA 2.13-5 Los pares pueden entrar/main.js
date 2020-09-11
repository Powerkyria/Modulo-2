'use strict';

// Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
// const pins = [2389, 2384, 2837, 5232, 8998];
// De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
// PISTA: Recuerda que el resto de la división entera (módulo %) de número par es 0.

const pins = [ 2389, 2384, 2837, 5232, 8998 ];
const even = pins.filter((pins) => pins % 2 === 0);

console.log(even);
