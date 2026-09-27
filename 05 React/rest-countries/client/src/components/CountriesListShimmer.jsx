import React from 'react'

const CountriesListShimmer = () => {
  return (
    <>
      {
        Array.from({length: 20}).map((val, idx) => (
          <div className='country-card shimmer-card' key={idx}>
            <div className='flag-container'></div>
            <h3 className='card-title'></h3>
            <div className='card-text-container'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))
      }
    </> 
  )
}

export default CountriesListShimmer