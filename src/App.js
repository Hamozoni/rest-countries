import Main from './components/main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import CountryDetails from './components/countryDetails/CountryDetails';
import { Provider } from 'react-redux'
import { store } from './store/store'
function App() {
  return (
    <div className='app'>

      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/countrydetails" element={<CountryDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
