import React, { Fragment } from 'react'
import './App.css'

function App() {
  const a = 10
  const b = 20

  return (
    // <div>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </div>

    // <React.Fragment>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </React.Fragment>

    // <Fragment>
    //   <h1>
    //     Hello React
    //   </h1>
    //   <h2>
    //     Mentor: Sai Pranab Patra
    //   </h2>
    // </Fragment>

    <>
      <h1 style={{backgroundColor: 'red', color:'yellow'}}>
        Hello React
      </h1>
      <h2>
        Mentor: Sai Pranab Patra
      </h2>

      <p>a is : {a}</p>
      <p>b is : {b}</p>
      <p>a + b is : { a + b }</p>
    </>
  )
}

export default App
