'use strict';

const list = document.querySelector('ul');

const numbers = [ 1, 2, 3 ];

const newItem = document.createElement('li');
const newItem2 = document.createElement('li');
const newItem3 = document.createElement('li');

const newContent = document.createTextNode(numbers[0]);
const newContent2 = document.createTextNode(numbers[1]);
const newContent3 = document.createTextNode(numbers[2]);

newItem.appendChild(newContent);
newItem2.appendChild(newContent2);
newItem3.appendChild(newContent3);

list.appendChild(newItem);
list.appendChild(newItem2);
list.appendChild(newItem3);
