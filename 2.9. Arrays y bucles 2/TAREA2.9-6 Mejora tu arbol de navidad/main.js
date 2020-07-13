'use strict';

// PINTADO EN LA CONSOLA

let triangle = '▲';
let tree = '';
let star = '★';
let trunk = '|';

function starTree (height){
    console.log(star)
    for (let i=0; i<height; i++){
        tree += triangle;
        console.log(tree);
    }
    console.log(trunk);
}

starTree(5);

// PINTADO EN PANTALLA, EJERCICIO CONSULTADO, RETOCO Y AÑADO COLOR

// let triangle = '▲';
// let tree = '';
// let star = '★';
// let trunk = '|';


// function treeWithStar(height) {
// 	let newParagraph = document.createElement('h3');
// 	newParagraph.innerHTML = star;
//     document.body.appendChild(newParagraph);
//     newParagraph.style.color= 'gold';


// 	for (let i = 0; i < height; i++) {
// 		let newParagraph = document.createElement('p');
// 		newParagraph.innerHTML = tree += triangle;
//         document.body.appendChild(newParagraph);
//         newParagraph.style.color= 'green';
// 	}

// 	let lastParagraph = document.createElement('h1');
// 	lastParagraph.innerHTML = trunk;
//     document.body.appendChild(lastParagraph);
//     lastParagraph.style.color= 'brown';
// }

// treeWithStar(5);
