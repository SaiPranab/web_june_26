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


fruits.push('Mango', 'Orange')
console.log(fruits)
console.log("last index of mango", fruits.lastIndexOf("Mango"))

console.log(fruits.slice(0, 3))
console.log(fruits.slice(1, 3))
console.log(fruits.slice(2))
console.log(fruits.slice())

// fruits.splice(2, 3)
// console.log("After splice", fruits)

// ['Apple', 'Banana', 'Mango', 'Orange', 'Mango', 'Orange']
fruits.splice(2, 3, "Cherry")
console.log("After splice2", fruits)

const numbers = [10, 20, 30]
const fruitsWithNumbers = fruits.concat(numbers)
console.log("fruits with numbers", fruitsWithNumbers)

const fruitsString = fruits.join('-#?')
console.log(fruitsString)

fruits.reverse()
console.log("After reverse", fruits)

fruits.push(57, 21, 31, 100)
fruits.sort()
console.log("After sort", fruits);

const arr = [10, 20, 30, 5]
arr.sort(xyz)
console.log(arr)

function xyz(a, b) {
  return a - b
}