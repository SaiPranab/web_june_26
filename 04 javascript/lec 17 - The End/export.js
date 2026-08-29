// const personName = "Ankit"

// // console.log(personName)

// // Named Export
// // export { personName }

// // Default Export
// export default personName

// /*
//   1. Named Export
//   2. Default Export
// */

// ================================
// 1. Named Export
const username = "Rajesh"

function sayHello() {
  console.log("Rajesh say's hello")
}

const user = {  
  username,
  sayHello,
  age: 21,
  salary: 34000.99
}

// export { username }
// export { sayHello, user }

// export default username
// export default user

export default function greet() {
  console.log("hiiiiiiiiiii")
}