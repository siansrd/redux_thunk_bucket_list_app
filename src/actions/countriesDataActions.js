export const getCountriesData = () => {
  return dispatch => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countryData => {
        return dispatch({
          type: 'GET_COUNTRIES_DATA',
          countryData
        })
      })
    }
}