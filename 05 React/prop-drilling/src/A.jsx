import React from 'react'
import B from './B'

const A = ({ message }) => {
  return (
    <div style={{
      border: "2px solid red",
      padding: '20px'
    }}>
      A Component
      <B message={message} />
    </div>
  )
}

export default A