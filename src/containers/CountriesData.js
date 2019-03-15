import React, { Component } from 'react';
import { getCountriesData } from '../actions/countriesDataActions.js';
import { connect } from 'react-redux';
import Select from '../components/Select';

class CountriesData extends Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return <Select />
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(getCountriesData())
  }
})

export default connect(null, mapDispatchToProps)(CountriesData);