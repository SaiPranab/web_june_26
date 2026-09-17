import { Link } from "react-router";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital
}) {
  return (
    <Link className="country-card" to={`/${name}`}>

      <div className="flag-container">
        <img src={flag} alt={name + ' flag'} />
      </div>

      <div className="card-text">
        <h3 className="card-title">{name}</h3>

        <p>
          <b>Population: {population}</b>
        </p>

        <p>
          <b>Region: {region}</b>
        </p>

        <p>
          <b>Capital: {capital.length ? capital.map(cap => cap.name) : 'N/A'}</b>
        </p>
      </div>
    </Link>
  )
}
