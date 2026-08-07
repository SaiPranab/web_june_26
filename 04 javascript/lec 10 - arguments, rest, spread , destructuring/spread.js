// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers)
// console.log(...numbers)

// const employees = [
//   {name: "Raj", age: 25},
//   {name: "Amit", age: 26},
//   {name: "Ankit", age: 27},
//   {name: "Rajesh", age: 28},
// ]
// console.log(employees)
// console.log(...employees)

// const myName = "Sai Pranab Patra"
// console.log(...myName)


// =================== copy arrays
// const arr1 = [100, 200, 300]
// // const arr2 = arr1
// // arr2.push(400)
// // console.log(arr1)

// // const arr2 = []
// // for (let i = 0; i < arr1.length; i++) {
// //   arr2[i] = arr1[i];
// // }

// const arr2 = [...arr1]

// arr2.push(500)
// console.log(arr1)
// console.log(arr2)


// =================== merge arrays
// const arr1 = [10, 20, 30]
// const arr2 = [100, 200, 300]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const name = "Javascript"
// const arr4 = [...arr3, ...name]
// console.log(arr4)


// // ============== copy Objects
// const user = {
//   id: 101,
//   name: "Aju",
//   age: 23
// }

// // const copy = user;

// const copyUser = {...user, phone: "98765654321"}
// console.log(copyUser)

// const copyUser1 = {}
// Object.assign(copyUser1, user)  // target, source
// console.log(copyUser1)


const employee = {
  id: 101,
  name: "Aju",
  age: 23,
  address: {
    city: "BBSR",
    pin: '751007'
  }
}

const copyEmployee = {...employee}
copyEmployee.address.city = 'CTC'
console.log(employee)