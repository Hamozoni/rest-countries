import './searchbar.css'
import { useSelector } from 'react-redux'
const SearchBar = ({ setSearchInput, setSelect }) => {
  const darkMode = useSelector(state => state.darkModeReducer.darkMode)
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSelectChange = (e) => {
    setSelect(e.target.value)
  }
  return (
    <div className={`searchbar-container  ${darkMode ? "darkmode-bg" : ""}`}>
      <input className={`${darkMode ? "darkmode-el" : ""}`} type="text" name="searchbar" onChange={handleSearchChange} placeholder='Search for a country...' />
      <select className={`${darkMode ? "darkmode-el" : ""}`} onChange={handleSelectChange} defaultValue={""}>
        <option value="" hidden disabled>Filter by region...</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default SearchBar