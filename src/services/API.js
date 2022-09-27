
const axios = require('axios').default;

const getDataFromAPI = () => {
  return axios.get('https://restcountries.com/v3.1/all')
}

export const getCountryFromAPI = (name) => {
  return axios.get(`https://restcountries.com/v2/name/${name}`)
}


export default getDataFromAPI


