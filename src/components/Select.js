import React from 'react'
import { connect } from 'react-redux';

const Select = ({countries}) => {
  const options = countries.map(country => {
    return <option value={country.name}>{country.name}</option>
  })

  return (
    <select>{ options }</select>
  )
}

const mapStateToProps = state => {
  return {
    countries: state.countriesData
  }
} 

export default connect(mapStateToProps)(Select);