// array

const myArr = [0, 1, 2, 3,4, 5, 6]
const myHeros = ["Shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

/* Array Methods */

// myArr.push(8)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)   // adds an element at the beginning of the array.
// myArr.shift()    // removes the first element of the array.

// console.log(myArr.includes(5)); // checks whether the value 5 exists in the array.
// console.log(myArr.indexOf(4));  // finds the index of value 4 in the array.

// const newArray = myArr.join()    // converts an array into a string

// console.log(myArr);
// console.log( newArray);  


/* slice, splice */

console.log("A " , myArr);
const myn1 = myArr.slice(1,3)  // Original array remains same
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // Manipulation of original array
console.log("c " ,myArr);
console.log(myn2);







