'use strict';

// https://books.adalab.es/materiales-front-end-i/modulo-2.-programando-la-web/2_7_arrays_y_bucles#ejercicio-4

// Empezamos en 2020 porque la de 2017 ya pasó y nos interesan las lunas futuras ---> i = 2020;
// Las lunas aparecerán cada 3 años y queremos calcular 15, entonces: 3 * 15 = 45 + 2020 = 2065,
// Las 15 lunas del cazador sucederán entre 2020 y 2065 ---> i < 2065
// Si este fenómeno solo se da cada 3 años, incrementamos la variable de tres en tres ---> i = i + 3;

for (let i = 2020; i < 2065; i = i + 3) {
	console.log(i);
}
