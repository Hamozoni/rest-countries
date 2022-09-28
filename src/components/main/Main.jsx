import './main.css'
import getDataFromAPI from '../../services/API';
import { useEffect, useState } from 'react';
import Country from '../country/Country'
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';

const Main = () => {
  const darkMode = useSelector(state => state.darkModeReducer.darkMode)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [select, setSelect] = useState("")
  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      setCountries(await getDataFromAPI()
        .then(response => response.data)
        .catch(e => {
          setError(e.response)
        }))
      setIsLoading(false)
    }
    getData()
  }, [])

  const countriesFiltered = countries?.filter((country) => {
    if (searchInput.length > 0) {
      return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    }

    if (select.length > 0) {
      return country.continents.includes(select)
    }
    else {
      return country
    }
  })

  return (
    <>
      <SearchBar
        setSearchInput={setSearchInput}
        setSelect={setSelect} />
      {error !== null && <div className={`${darkMode ? "darkmode-bg" : ""} loading-container`}> <h1 className="loading">Something has failed, try again later</h1></div>}
      {isLoading && <div className={`${darkMode ? "darkmode-bg" : ""} loading-container`}><h1 className='loading'>Loading...</h1> </div>}
      <div hidden={isLoading || !countries || !countries.length}>
        {countriesFiltered.length > 0 ?
          <div className={`${darkMode ? "darkmode-bg" : ""} countries-container`}>
            {countriesFiltered?.map(country => {
              return <Country key={country?.name?.common} country={country} />
            })}
          </div>
          :
          <div className={`${darkMode ? "darkmode-bg" : ""} loading-container`}><h1 className='loading'>No countries found</h1></div>
        }
      </div>
    </>
  )
}


export default Main
