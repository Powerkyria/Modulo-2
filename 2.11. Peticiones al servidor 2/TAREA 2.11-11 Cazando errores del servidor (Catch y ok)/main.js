'use strict';

//Ejercicio de un ejemplo

// Cuando se resuelve la promesa de un fetch en esta nos llega información, uno de los datos es la propiedad 'ok'. Esta es true si el código de respuesta es de tipo 200, en caso contrario es false. Una práctica extendida es cuando el valor de 'ok' es falso generar una excepción con throw, ya que cuando hacemos esto dentro de un then() en lugar de ejecutarse el siguiente then() se ejecuta catch()

// fetch('https://api.github.com/repositories?since=asdf')
//   .then(response => {
//     if (!response.ok) {
//       throw response;
//     }
//     return response.json();
//   })
//   .then(data => console.log('success', data))
//   .catch(err => console.log('error', err));

  // si arreglas el parámetro since de la url verás como se ejecuta el segundo then()  :

  // fetch('https://api.github.com/repositories')
  // .then(response => {
  //   if (!response.ok) {
  //     throw response;
  //   }
  //   return response.json();
  // })
  // .then(data => console.log('success', data))
  // .catch(err => console.log('error', err));

// si eliminas la excepción se ejecutará el segundo then() aunque el estado de la respuesta no sea de tipo 200. :

fetch('https://api.github.com/repositories?since=asdf')
.then(response => {
  if (!response.ok) {
    
  }
  return response.json();
})
.then(data => console.log('success', data))
.catch(err => console.log('error', err));
