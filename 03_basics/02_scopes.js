function one() {
    const username = "Shail"

    function two(){
        const website = "Google"
        console.log(username);
        
    }
   // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "shail"
    if (username === "shail") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//  +++++++++++++++++++++++++++++ //

console.log(addOne(5)) // works , because function declarations are hoisted completely.
function addOne(num) {
    return num + 1
}


console.log(addTwo(5));  // fails bcoz this is a function expression stored in a const.
const addTwo = function(num) {
    return num + 2
}


