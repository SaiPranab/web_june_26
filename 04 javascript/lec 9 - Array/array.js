// // const s1 = "Amit"
// // const s2 = "Ankit"
// // const s3 = "Asit"

// const stds = ["Amit", "Ankit", "Asit"]
// console.log(stds)

// // console.log(stds[0])
// // console.log(stds[1])
// // console.log(stds[2])

// for(let i = 0; i< stds.length; i++) {
//   console.log(stds[i])
// }

// console.log(stds[4]) // undefined

// stds[10] = "Sambit"


// ================= Array Methods ===============
const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange", "Cherry")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift("Cherry")
console.log(fruits)

fruits.shift()
console.log(fruits)

console.log(fruits.includes("Apple"))
console.log(fruits.includes("Apple", 2))

console.log(fruits.indexOf("Apple")) // 0
console.log(fruits.indexOf("Apple", 2)) // -1


// // step 1 => check mango exists or not
// if(fruits.includes("Mango1")) {
//   // step 2 => if exists then extract the index
//   const idx = fruits.indexOf("Mango")

//   // step 3 => then update the value in the index
//   fruits[idx] = "Kiwi"

//   console.log(fruits)
// } else {
//   // step 4 => if notexist then do nothing
//   alert("Serch element is not present")
// }


