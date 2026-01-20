const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map ( (num) => num + 10)

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

// console.log(newNums);


/*  reduce - used in shopping cart  */

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, curval){
//      console.log(`acc: ${acc} and curval: ${curval}`);
    
//      return acc + curval
// },0)

// const myTotal = myNums.reduce( (acc, curval) => {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
      
      
// },0)

const myTotal = myNums.reduce( (acc , curval) => acc+curval , 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);
