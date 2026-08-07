// function fun() {
//   console.log("arguments", arguments)

//   console.log(arguments[0]) // 10
//   console.log(arguments[2]) // true

//   for(let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i])
//   }
// }


// const fun = function () {
//   console.log("arguments", arguments)

//   console.log(arguments[0]) // 10
//   console.log(arguments[2]) // true

//   for(let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i])
//   }
// }

const fun = (...others) => {
  // console.log("arguments", arguments)
  
  // console.log(arguments[0]) // 10
  // console.log(arguments[2]) // true
  
  // for(let i = 0; i < arguments.length; i++) {
  //   console.log(arguments[i])
  // }

  console.log("others", others)
  for(let i = 0; i < others.length; i++) {
      console.log(others[i])
  }

  others.forEach((el) => console.log(el))
}

fun(10, "JT", true, 10.25)


function f1(a, ...params) {
  console.log("1. params", params) // 20, 30
  console.log("2. arguments", arguments) // 10, 20, 30
}
f1(10, 20, 30)

/**
 * Diff betn arguments keyword & rest paramter
 * 1. arguments keyword is a array like Object but rest parameter is a proper 1-D array
 * 2. arguments keyword cannot access array methods whereas rest parameters can access array methods
 * 3. arguments cannot be used inside arrow function whereas rest parameters can be used inside arrow functions & regular functions.
 * 4. arguments keyword collect & stores all the arguments passed into the function whereas rest paramters only collects the remaining arguments passed into the function 
 */