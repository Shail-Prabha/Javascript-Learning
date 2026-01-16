const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // helpful for e-commerce application


const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); //output -> 1.12e+3


const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9)); 
// console.log(Math.min(4, 3 , 6, 8)); 
// console.log(Math.max(4, 3 , 6, 8)); 

console.log(Math.random()); // Random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10); // Random decimal number between 0 (inclusive) and 10 (exclusive)
console.log((Math.random()*10) + 1); // Random decimal number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random()*10) + 1); // Random INTEGER between 1 and 10 (inclusive)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);












