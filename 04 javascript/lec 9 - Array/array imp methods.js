let numbers = [10, 20, 30, 40, 50]

// for(let i = 0; i < numbers.length; i++) 
//   console.log(numbers[i]);

// numbers.forEach(function printNumbers(value, idx, arr){
//   console.log("value is", value, "at idx", idx, "of array", arr)
// })

// numbers.forEach(printNumbers)
// function printNumbers(value, idx, arr){
//     console.log("value is", value, "at idx", idx, "of array", arr)
//   }

// const printNumbers = function (value, idx, arr){
//     console.log("value is", value, "at idx", idx, "of array", arr)
//   }
// numbers.forEach(printNumbers)

// numbers.forEach(function (value, idx, arr) {
//   console.log("value is", value, "at idx", idx, "of array", arr)
// })

// numbers.forEach((value, idx, arr) => {
//   console.log("value is", value, "at idx", idx, "of array", arr)
// })



// // =============================== map function
// const numbersIncreasedByTwo = numbers.map((value, idx, arr) => {
//   console.log("value is", value, "at idx", idx, "of array", arr)
//   return value + 2
// })
// console.log('numbersIncreasedByTwo', numbersIncreasedByTwo)

// const squareNumbers = numbers.map(value => value * value)
// console.log('squareNumbers', squareNumbers)

// const users = [
//   {
//     id: 101,
//     name: 'Sambit Parida',
//     salary: 100000
//   },
//   {
//     id: 102,
//     name: 'Snigdha Mohanty',
//     salary: 110000
//   },
//   {
//     id: 103,
//     name: 'Aiswarya Ayeshkant',
//     salary: 120000
//   },
//   {
//     id: 104,
//     name: 'Sinumayee Prusty',
//     salary: 130000
//   },
// ]

// // const modfiedUsers = users.map((value) => {
// //   console.log("Value is", value)

// //   return {
// //     id: value.id,
// //     firstname: value.name.split(" ")[0],
// //     bonus: value.salary * .10
// //   }
// // })

// const modfiedUsers = users.map(user => ({
//   id: user.id,
//   firstname: user.name.split(" ")[0],
//   bonus: user.salary * .10
// }))
// console.log("// modfied users", modfiedUsers)


// ========================== filter function
// numbers = [10, 11, 20, 21, 30, 31]

// // const divisibleByTen = numbers.filter((value, idx, arr) => {
// //   console.log("value is", value, "at idx", idx, "of array", arr)

// //   return value % 10 == 0
// // })
// // console.log("divisible By ten", divisibleByTen)
// // divisibleByTen.forEach(value => console.log(value))

// numbers.filter()

// =========================== some()
// numbers = [10, 20, 30, 40, 41, 51]
// const isAnyOddPresent = numbers.some(num => num % 2 == 1)
// console.log("///// is Any Odd Present", isAnyOddPresent)

// const isEveryMemberAreEven = numbers.every(num => num % 2 == 0)
// console.log("//// is every members are even", isEveryMemberAreEven)


// =========================== find(), findIndex()
numbers = [10, 20, 30, 40, 51]

// const number = numbers.find(num => num == 41)
// console.log("is 41 found", number)

// const numberIdx = numbers.findIndex(num => num == 41)
// console.log("is 41 found", numberIdx)


// const sum = numbers.reduce((prevVal, currVal, idx, arr) => {
//   console.log("previous Value is", prevVal, "current value is", currVal, "at idx", idx, "of array", arr)

//   return prevVal + currVal
// })
// console.log("////////// sum", sum)


const orders = [
  {
    id: 101,
    amount: 2000,
    status: "Delivered"
  },
  {
    id: 102,
    amount: 4000,
    status: "Pending"
  },
  {
    id: 103,
    amount: 6000,
    status: "Delivered"
  },
]
// // 1. find the orders whoose status is Delivered
// const deliveredOrders = orders.filter(order => order.status === 'Delivered')
// console.log("//// delivered Orders", deliveredOrders)

// // 2. merge the delivered orders amount to get the total sale
// const totalSale = deliveredOrders.reduce((prev, curr)=> {
//   console.log("....... prev", prev , "currr", curr)
//   return prev + curr.amount
// }, 0)
// console.log("/////// total sale ", totalSale)


const users = [
  {
    id: 1,
    name: "Sarthak",
    age: 20
  },
  {
    id: 2,
    name: "Amit",
    age: 26
  },
  {
    id: 3,
    name: "Nikhil",
    age: 28
  },
]
// find the average age of users
const totalAge = users.reduce((prev, curr) => prev + curr.age, 0)
console.log("//// total age", totalAge)
console.log("//// average age", totalAge / users.length)