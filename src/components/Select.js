import React, { Component } from 'react'
import { connect } from 'react-redux';

class Select extends Component {

  createOptions() {
    return this.props.countries.map(country => {
      return <option value={country.name}>{country.name}</option>
    })
  }

  render() {
    return <select>{ this.createOptions() }</select>
  }

}

const mapStateToProps = state => {
  return {
    countries: state.countriesData
  }
} 

export default connect(mapStateToProps)(Select);