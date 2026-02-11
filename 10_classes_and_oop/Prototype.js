let myName = "shail          "

// console.log(myName.length)
// console.log(myName.trim().length);
// console.log(myName.trueLength());

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.shail = function() {
    // console.log(`Shail is present in all objects`);
    
}

Array.prototype.heyShail = function() {
    // console.log(`Shail says hello`);
    
}

// heroPower.shail()
myHeroes.shail()
myHeroes.heyShail()
// heroPower.heyShail()



/* inheritance */

const User = {
    name: "user1",
    email: "user1@gmail.com"
}

const Teacher = {
     makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User    // Prototypal inheritance


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "User2        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUserName.trueLength()
"shail".trueLength()
"iceTea".trueLength()