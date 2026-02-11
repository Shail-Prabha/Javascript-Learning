function SetUsername(username) {
    // Complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const user1 = new createUser("user1", "user1@fb.com", "123")
console.log(user1);
console.log(user1.email);
