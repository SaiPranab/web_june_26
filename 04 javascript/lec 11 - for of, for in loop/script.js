// // let fruits = ["Apple", "Banana", "Mango"];

// // // for loop ------------------------------
// // console.log("By using for loop -------------")
// // for(let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i])
// // }

// // // for of loop --------------------------
// // console.log("By using for of loop -------------")
// // for(const fruit of fruits){
// //   console.log(fruit)
// // }


// // for in loop --------------------------
// const student = {
//   id: 101,
//   name: "Ankit",
//   age: 25,
//   course: "Java Fullstack",
//   courseFees: 30000.99
// }

// // for(const key in student) {
// //   // console.log(key, typeof key)
// //   console.log(student[key])
// // }

// // Object.keys() ----------------
// console.log(Object.keys(student)) // array -> of keys
// console.log(Object.values(student)) // array -> of values

// // 1.
// // const keys = Object.keys(student)
// // for(const key of keys) {
// //   console.log(key)
// // }
// // for(const key of Object.keys(student)) {
// //   console.log(key)
// // }

// // 2.
// // const values = Object.values(student)
// // values.forEach(val => console.log(val))
// // Object.values(student).forEach(val => console.log(val))


// Object.entries() => array of arrays or array of key value pairs
const student = {
  id: 101,
  name: "Ankit",
  age: 25,
  course: "Java Fullstack",
  courseFees: 30000.99
}

// console.log(Object.entries(student))
// const entries = Object.entries(student)
// for(const entry of entries) {
//   // console.log("////", entry) // array
//   console.log("outer loop")
//   for(let i = 0; i < entry.length; i++) {
//     console.log("value is", entry[i], "at idx", i)
//   }
// }


const entries = Object.entries(student)
// for(const entry of entries) {
//   const [key, value] = entry
//   console.log(key, '->', value) 
// }

for(const [key, value] of Object.entries(student)) {
  console.log(key, '->', value) 
}