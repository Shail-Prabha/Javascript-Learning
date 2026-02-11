class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const user1 = new Teacher("Shail", "shail@gmail.com", "123")
user1.addCourse()
const user2 = new User("Urvi")
user2.addCourse()
