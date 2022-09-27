import './country.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Country = ({ country }) => {
  const darkMode = useSelector(state => state.darkModeReducer.darkMode)
  return (
    <>
      <Link state={country} style={{ textDecoration: 'none' }} to={"countrydetails"}>
        <div className={`country ${darkMode ? "darkmode-bg" : ""}`}>
          <img src={country?.flags?.svg} alt="flag" />
          <div className='country-data'>

            <h3>{country?.name?.common}</h3>
            <span><b>Population:</b> {country?.population}</span>
            <span><b>Region:</b> {country?.region}</span>
            <span><b>Capital:</b> {country?.capital}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Country