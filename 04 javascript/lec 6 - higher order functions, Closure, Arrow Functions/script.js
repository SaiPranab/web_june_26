// // function fun(f1) {
// //   console.log("value of f1", f1)
// // }

// // // fun(10)
// // // fun(true)
// // // fun("JT")

// // function hello() {
// //   console.log("Hello Everyone!!!")
// //   return 100
// // }

// // // fun(hello())
// // fun(hello)


// // ======================
// function f3() {
//   console.log("This is f3 function")
// }

// function f1() {
//   console.log('This is f1 function')

//   // return 101
//   // return function f2() {
//   //   console.log('This is f2 function')
//   // }
//   return f3
// }

// let x = f1()
// console.log("//////////", x)
// x()


// ============== setTimeout, setInterval =========
// console.log(1)
// console.log(2)
// console.log(3)

// console.log(1)
// setTimeout(f1, 3000)
// console.log(3)

function f1() {
  console.log("Hiiiiiii")
}

const intervalId = setInterval(f1, 2000)
console.log("/////////////", intervalId)
setTimeout(function () {
  console.log("Clearing interval")
  clearInterval(intervalId)
}, 10000)