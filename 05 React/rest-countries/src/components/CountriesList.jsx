import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {

  return (
    <div className="countries-container">
      {
        countriesData.map((country, idx) => (
          <CountryCard 
            key={idx}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            capital={country.capital}
            region={country.region}
          />
        ))
      }
    </div>
  )
}
