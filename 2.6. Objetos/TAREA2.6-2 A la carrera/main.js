'use strict';

const adalaber1 = {
	name: 'Susana',
	age: 34,
	job: 'periodista',
	run: (phrase) => `${phrase}`,
	runAMarathon: (distance) => `Estoy corriendo una marathon de ${distance} kilometros`
};

console.log(adalaber1.run('Estoy corriendo'));
console.log(adalaber1.runAMarathon(50));

//OTRA FORMA SE HACERLO

// const adalaber1 = {
//     name: 'Susana',
//     age: 34,
//     job: 'periodista',
//     run: phrase => `${phrase}`,
//     runAMarathon: distance => console.log(`Estoy corriendo una marathon de ${distance} kilometros`),
//     }

//     adalaber1.runAMarathon(50);
