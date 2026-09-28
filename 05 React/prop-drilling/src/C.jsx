import React from 'react'

const C = ({ message }) => {
  return (
    <div style={{
      border: "2px solid blue",
      padding: '20px'
    }}>
      C Component
      <br />
      message is {message}
    </div>
  )
}

export default C