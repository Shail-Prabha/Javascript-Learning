const name = "Shail Prabha"
const repoCount = 50

// console.log(name + repoCount + " Value");

//  console.log(`Hello my name is ${name} and my repo count is 
// ${repoCount}`); // String interpolation

const gameName = new String('SHAIL-SP')
// console.log(gameName[0]);
//console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 7)  // drops the end // it doesn't obey (-ve) value
// console.log(newString);

const anotherString = gameName.slice(-7, 4) // negativeIndex = length + negativeIndex,
//  start = 1(included), end = 4(excluded) 
// console.log(anotherString);

const newStringOne = "   Shail             ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('choudhary'));

console.log(gameName.split('-'));













