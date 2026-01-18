function sayMyName () {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("L");
    
}

// sayMyName()   // to access value

// function addTwoNumbers(number1, number2) {      // number1,number -> parameter
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(3, null) 


function addTwoNumbers(number1, number2) {      
    let result = number1 + number2
    // console.log("Shail");
    // return result
    return number1 + number2
    
    
}

const result = addTwoNumbers(3, null)     // 3,null -> argument
// console.log("Result: ", result);


function loginUserMessage(username) {
    if(!username) {
       console.log("Please enter a username");
       return
       
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shail"))
// console.log(loginUserMessage())


/* -------For shopping cart---------- */

function calculateCartPrice(val1, val2,...num1) {    //...-> rest operator
    return num1
    
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  

/* How to pass an object to a function */

const user = {
    username: "Shail",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 700, 1000]));

