import { useContext, useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { WindowSizeContext } from "../context/windowSizeContext";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  const filteredCountries = countriesData.filter(country =>
    country.names.common.toLowerCase().includes(query.toLowerCase()) || 
    country.region.toLowerCase().includes(query.toLowerCase()))

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

  // const [width, setWidth] = useState('')
  // const [height, setHeight] = useState('')
  // const [windowSize, setWindowSize] = useState({
  //   width: innerWidth,
  //   height: innerHeight
  // })
  const { windowSize, setWindowSize } = useContext(WindowSizeContext)
  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log(innerWidth, "X", innerHeight)
      // setWidth(innerWidth)
      // setHeight(innerHeight)
      setWindowSize({
        width: innerWidth,
        height: innerHeight
      })
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
      <h1 style={{textAlign: 'center'}}>{windowSize.width} X {windowSize.height}</h1>

      <div className="countries-container">
        {
          !countriesData.length ?
            <CountriesListShimmer /> :

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
              <h2>Unable to find Country with name:- {query}</h2>
        }
      </div>
    </>
  )
}
