import { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const filteredCountries = countriesData.filter(country => 
              country.name.common.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div className="countries-container">
        {
          filteredCountries.length != 0 ? 
            (filteredCountries.map((country, idx) => (
              <CountryCard 
                key={idx}
                flag={country.flags.svg}
                name={country.name.common}
                population={country.population}
                capital={country.capital}
                region={country.region}
              />)))
            :
              <p>Unable to find Country with name:- {query}</p>
        }
      </div>
    </>
  )
}
