import React, { useState } from 'react'

const Greet = ({ name }) => {
  console.log("Greet Component")
  const [count, setCount] = useState(0)

  return (
    <div style={{border: '2px solid red', padding: '20px'}}>
      <h3>Child Component</h3>
      <p>{name} says Good Morning</p>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Greet