import { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  const filteredCountries = countriesData.filter(country =>
    country.names.common.toLowerCase().includes(query.toLowerCase()))
    
    useEffect(() => {
      // fetch(
      //   'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.url_svg,region,population&limit=100',
      //   { headers: { 'Authorization': 'Bearer rc_live_a0096ec8bdb541398af3b9c10e6d6292' } }
      // )
      fetch("http://localhost:3000/countries")
        .then((response) => response.json())
        .then((result) => {
          // console.log("result is", result)
          setCountriesData(result)
        })
    }, [])

  /*
    useEffect =>
      - to perform something on the mount (first render) of the component
      - to perform something when state is changed
      - to perform something when the component is unmount (removed) from the web page

    syntax :-
      useEffect(callback fn, dependency array)

      dependency array:- 
        is not available -> useEffect will be called on every render & re-render 
        is [] -> useEffect is only called once
        is [state] -> useEffect will only called on render & on the state change
  */

  return (
    <>
      <div className="countries-container">
        {
          filteredCountries.length != 0 ?
            (filteredCountries.map((country, idx) => (
              <CountryCard
                key={idx}
                flag={country.flag.url_svg || "www.google.com"}
                name={country.names.common}
                population={country.population}
                capital={country.capitals}
                region={country.region}
              />)))
            :
            <p>Unable to find Country with name:- {query}</p>
        }
      </div>
    </>
  )
}
