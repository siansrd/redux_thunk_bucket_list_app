import React, { Component } from 'react';
import { getCountriesData } from '../actions/countriesDataActions.js';
import { connect } from 'react-redux';
import CountriesSelect from './CountriesSelect';

class CountriesData extends Component {

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return <CountriesSelect />
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(getCountriesData())
  }
})

export default connect(null, mapDispatchToProps)(CountriesData);