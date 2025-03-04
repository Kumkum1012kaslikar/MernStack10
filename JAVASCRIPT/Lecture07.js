//numbers and maths

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //100.0

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //124

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //10,00,00

//++++++++++++++++++++++++ Maths ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(1, 3, 4, 6));
console.log(Math.max(7, 5, 3, 2));

console.log(Math.random()); //always comes b/w 0 to 1
console.log(Math.random() * 10 + 1); //b/w 1. to 9.
console.log(Math.floor(Math.random() * 10) + 1); // b/w 1 to 9

//declare the values so that the result should come between
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //b/w 10 to 20

