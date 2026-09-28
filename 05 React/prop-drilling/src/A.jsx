import React from 'react'
import B from './B'

const A = () => {
  return (
    <div style={{
      border: "2px solid red",
      padding: '20px'
    }}>
      A Component
      <B />
    </div>
  )
}

export default A