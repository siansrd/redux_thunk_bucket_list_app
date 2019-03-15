import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToBucketList } from '../actions/bucketListActions.js';

class Select extends Component {

  handleChange(evt) {
    const country = evt.target.value;
    this.props.countrySelected(country);
  }

  createOptions() {
    return this.props.countries.map(country => {
      return <option value={country.name}>{country.name}</option>
    })
  }

  render() {
    return <select onChange={ evt => this.handleChange(evt) }>{ this.createOptions() }</select>
  }

}

const mapDispatchToProps = dispatch => ({
  countrySelected(countryName) {
    dispatch(addToBucketList({name: countryName, visited: false}))
  }
})

const mapStateToProps = state => {
  return {
    countries: state.countriesData
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Select);