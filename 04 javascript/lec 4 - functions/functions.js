// 1. function declaration
// function <fun_name>(list of params) {}
function myFun() {
  console.log("Good Morning!!!")
}
// myFun()


function greet(name = 'JT'){
  console.log("Good Morning", name, '!!!')
}
// greet("Rashmi Sir")
// greet(10)
// greet(true)
// greet()
// greet("Sai", 10, 20, 30)

function addJTTag(name) {
  return "JT'ans " + name
}

let updatedName = addJTTag("Sai")
console.log(updatedName)
