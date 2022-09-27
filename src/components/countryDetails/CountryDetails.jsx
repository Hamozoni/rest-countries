import './countrydetails.css'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import backArrow from '../../images/arrow-back-outline.svg'
import { getCountryFromAPI } from '../../services/API';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const CountryDetails = () => {
  const darkMode = useSelector(state => state.darkModeReducer.darkMode)
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { state } = useLocation();
  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      setCountry(await getCountryFromAPI(state?.name.common)
        .then(response => response.data)
        .catch(err => console.error(err)))
      setIsLoading(false)
    }
    getData()

  }, [state?.name.common])

  return (
    <>
      {isLoading ? <div className={`loading ${darkMode ? "darkmode-bg" : ""}`}><h1>Loading...</h1> </div> : <> <div className='back-btn'>
        <Link style={{ textDecoration: "none" }} to={"/"}> <button className={`${darkMode ? "darkmode-el" : ""}`}> <img src={backArrow} alt="backarrow" />Back</button></Link>
      </div>
        <div className={`countrydetails-container ${darkMode ? "darkmode-bg" : ""}`}>
          <div className="flag">
            <div> <img src={country[0]?.flags?.svg} alt="flag" /> </div>
          </div>
          <div className='countrydetails-data'>
            <div className='countrydata-firstcolumn'>
              <h1>{country[0]?.name}</h1>
              {<span><b>Native Name: </b>{country[0]?.nativeName}</span>}
              <span><b>Population: </b>{country[0]?.population}</span>
              <span><b>Region: </b>{country[0]?.region}</span>
              <span><b>Sub region: </b>{country[0]?.subregion}</span>
              {country[0]?.capital ? <span><b>Capital: </b>{country[0]?.capital}</span> :
                <span><b>Capital: </b>None</span>
              }
            </div>
            <div className="countrydata-secondcolumn">
              <span><b>Top level domain: </b>{country[0]?.topLevelDomain} </span>
              <span><b>Currencies: </b>{country[0]?.currencies?.map(object => {
                return <span key={object.name}>{object.name} </span>
              })}</span>
              <span><b>Languages: </b>{country[0]?.languages?.map(object => {
                return <span key={object.name}>{object.name} </span>
              })}</span>
            </div>
            <div className='bordercountry'>
              {country[0]?.borders ? <><b>Border countries:</b> {country[0]?.borders?.map((border) => {
                return <span className={`border  ${darkMode ? "darkmode-el" : ""}`} key={border}>{border}</span>
              })}</> : <span><b>Border countries: </b>None</span>}
            </div>
          </div>
        </div>
      </>}
    </>
  )
}

export default CountryDetails