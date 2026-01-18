//  const tinderUser = new Object()   // Object declare // Singleton object
 const tinderUser = {}      // Object declare // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shail",
            lastname: "Prabha"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//  const obj3 = { obj1,obj2 }
//  const obj3 = Object.assign({}, obj1, obj2, obj4)  // merges multiple objects into a new object without modifying the originals.

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ++++++++++++   Destructuring +++++++++++++++++++ //

const course = {
    coursename: "Javascript course",
    price: "999",
    courseInstructor: "Hitesh"
}

//  course.courseInstructor

const {courseInstructor: instructor} = course   // Extracting value to make code clean  // object destructuring with renaming.
// console.log(courseInstructor);
console.log(instructor);

// {
    // json
// }

// {
//     "name": "shail",
//     "coursename": "js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}

]
   