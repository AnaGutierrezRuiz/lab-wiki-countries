import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className='container d-flex flex-row'>
      <div>
        {countries.map(country => (
          <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} className='text-decoration-none text-black'>
            <div className="card">
              <div className='mt-3'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} className="card-img-top" alt="countyImage" style={{ width: 100 }} />
              </div>
              <div className="card-body">
                <p className="card-text">{country.name.common}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

}

export default CountriesList

