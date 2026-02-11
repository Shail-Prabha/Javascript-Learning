class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const shail = new User("Shail")
// console.log(shail.createId())

class Teacher extends User {
    constructor(username,email){
         super(username)
         this.email = email
    }
}

const iphone = new Teacher("iphone", "ip@gmail.com")
// iphone.logMe()
console.log(iphone.createId());
