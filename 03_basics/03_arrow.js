const user = {
    username: "shail",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function study () {
//     let username = "hitesh"
//     console.log(this.username);    // this.username is undefined inside a normal function unless explicitly assigned.
    
// }
// study()



// const study = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const study = () => {
    let username = "hitesh"
    console.log(this);
}

// study()

// const addTwo = (num1, num2) => {   // Explicit return (block body)
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // Implicit return (expression body)

// const addTwo = (num1, num2) =>  (num1 + num2)   // implicit return with parentheses

const addTwo = (num1, num2) => ({username: "shail"})

console.log(addTwo(3,4))


