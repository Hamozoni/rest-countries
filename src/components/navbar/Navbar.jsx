import './navbar.css'
import moonicon from '../../images/dark-mode-icon.svg'
import moonfilled from '../../images/moon-filled.svg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../reducers/darkModeReducer'
const Navbar = () => {
  const darkMode = useSelector(state => state.darkModeReducer.darkMode)
  const dispatch = useDispatch()
  const textDarkLightMode = darkMode ? "Light mode" : "Dark mode"
  return (
    <div className={`navbar-container ${darkMode ? "darkmode-el" : "lightmode-el"}`}>
      <Link className={`${darkMode ? "darkmode-text" : "lightmode-text"}`} to={"/"}>
        <h1 className={`${darkMode ? "darkmode-text" : "lightmode-text"}`}>Where in the world?</h1>
      </Link>
      <div className='modechange-container'>
        <img onClick={() => dispatch(toggleDarkMode(!darkMode))} src={darkMode ? moonfilled : moonicon} alt="darkmode" />
        <button className={`${darkMode ? "darkmode-text" : "lightmode-text"}`} onClick={() => dispatch(toggleDarkMode(!darkMode))}>{textDarkLightMode}</button>
      </div>
    </div>

  )
}

export default Navbar