/*singleton*/ 
// Object.create
// object literals

const mySym = Symbol("Key1") //creates a new Symbol, which is a primitive data type in JavaScript

const JsUser = {
    name: "Shail",
    "full name": "Shail Prabha",
    [mySym]: "mykey1",     // for interview
    age: 18,
    location: "Jaipur",
    email: "shail@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // accesses the value stored under a Symbol key in an object.
// When a Symbol is used as an object key, you must use bracket notation.

// JsUser.email = "shail@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "shail@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JsUser");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User,${this.name}`);
    
}
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 


