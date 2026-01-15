/* Primitive */
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 35783927947375438908n


/* Is js dynamically or statically typed language? */
// JavaScript is a dynamically typed language.

/* Reference or non-primitive */
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Shail",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);
