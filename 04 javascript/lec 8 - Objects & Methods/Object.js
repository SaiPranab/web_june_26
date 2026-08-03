// const user = {
//   firstname: "Ankit",
//   lastname: 'Padhi',
//   age: 23,
//   isGraduated: true,
//   'address': 'BBSR',
//   'course fee': 30000.99,
//   greet: function () {
//     console.log("Ankit says Hello !!!", this)
//     console.log("My fullname is", this.fullname)
//   },

//   add: function(a, b) {
//     console.log("Addding a+b", (a+b))
//   }

//   // hello: () => {
//   //   console.log("Hello Everyone !!!", this)
//   // }
// }

// // // Extract complete Object
// // // console.log("user object", user)


// // //  Extract single Values from Object
// // console.log("firstname is", user.firstname)
// // console.log("lastname is", user.lastname)
// // console.log("fullname is", user.firstname, user.lastname)

// // console.log("age is", user['age'])
// // // console.log("age is", user.course fee)
// // console.log("course fee is", user['course fee'])

// // console.log("fullname key is", user.fullname) // undefined - as key is not present


// // // ADD / UPDATE key to Object
// user.fullname = "Ankit Ku. Padhi"
// // user.isGraduated = false
// // console.log(user)


// // Access Methods
// user.greet()
// // user.hello()

// user.add(100, 200)


//  ===================== Nested Objects ==============
const employee = {
  fullname: 'Sahil Patra',
  age: 32,
  address: { 
    city: "BBSR",
    state: "Odisha",
    PIN: "751007"
  }
}