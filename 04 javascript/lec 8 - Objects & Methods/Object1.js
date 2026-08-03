const user = {
  name: "Ankit",
  age: 21
}


// user = {} // error -> assignment to constant variable

/**
 * const Object
 * 1. existing key can be updated
 * 2. existing key can be deleted
 * 3. new key can be added
 */
user.name = "Raj"
console.log(user)

delete user.age
console.log(user)

user.address = "BBSR"
console.log(user)

/**
 * Object.seal()
 * 1. existing can be updated
 * 2. existing key cannot be deleted
 * 3. new key cannot be added
 */
const employee = {
  name: "Debendra",
  age: 21
}

Object.seal(employee)
console.log(employee)

employee.name = "Soumya"
console.log(employee)

delete employee.name
console.log(employee)

employee.address = "BBSR"
console.log(employee)


/**
 * Object.freeze()
 * 1. existing can not be updated
 * 2. existing key can not be deleted
 * 3. new key can not be added
 */
const student = {
  name: "Debendra",
  age: 21
}

Object.freeze(student)
console.log(student)

student.name = "Soumya"
console.log(student)

delete student.name
console.log(student)

student.address = "BBSR"
console.log(student)