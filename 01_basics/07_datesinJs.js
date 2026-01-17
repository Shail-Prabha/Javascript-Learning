// Dates

let myDate = new Date()  // Date → built-in JS object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);    // Output-> Object


// let myCreatedDate = new Date(2026, 1, 24)  // year,month,date // jan->0,feb->1...and so on
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2026, 0,16, 5, 3, 7)  // yy/mm/dd/hrs/min/sec
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate3 = new Date("2026-01-16")
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-16-2026")  // mm/dd/yy->indian style
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));   


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // getMonth() is zero-based,January → 0,
//  if you want the human-readable month (1–12), you must add 1
console.log(newDate.getFullYear());
console.log(newDate.getDay());   // Starting from Monday, Monday count as 1

newDate.toLocaleString('default',{
    weekday: "long",
    
})










 




