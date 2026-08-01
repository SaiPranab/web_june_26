// // const hello = function () {
// //   console.log("Hello Everyone!!!")
// // }

// // // greet()
// // hello()

// // const concatString = function (a, b) {
// //   return a + b
// // }

// // console.log("//////", concatString())
// // console.log(concatString("Java", "Script"))


// // ====== Anonymous Function
// // function(a) {
// //   console.log("......", a)
// // }

// // ============= Arrow Function
// // const add = (num1, num2) => {
// //   console.log("Addding num21, num2")
// //   return num1 + num2
// // }

// const add = (num1, num2 = 100) => (num1 + num2)

// // const result = add(10, 20)
// const result = add(10)
// console.log("Result is", result)


// =========== IIFE
(function (name) {
  console.log("Helooooooooooooooo", name)
})("Sai");

(function (name) {
  console.log("Helooooooooooooooo", name)
})("Sai")

console.log("Java Technocrat")