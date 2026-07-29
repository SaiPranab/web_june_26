var a = 10;
let b = 20

// Local Scope
// function f1() {
//   var c = 30
//   let d = 40

//   console.log(c)
//   console.log(d)
// }
// f1();

// console.log(c)
// console.log(d)

// // Block Scope
// {
//   debugger
//   var e = 50
//   let f = 60

//   console.log(e)
//   console.log(f)
// }

// console.log(e)
// console.log(f)

// ---------------- LEXICAL SCOPE
function fun1() {
  debugger
  let x = 10
  console.log(x)

  function fun2() {
    let y = 20
    console.log(y)
    console.log("Value of x inside nested fucntion", x)

    function fun3() {
      console.log("Value of y inside fun3", y)
      console.log("Value of x inside fun3", x)

      console.log("Value of A inside fun3", a)
      console.log("Value of B inside fun3", b)
    }

    console.log("Before calling fun3")
    fun3()
    console.log("After calling fun3")
  }

  console.log("Before Calling fun2")
  fun2()
  console.log("After Calling fun2")
}

fun1()