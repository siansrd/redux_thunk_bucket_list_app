import React, { Component } from 'react';
import { getCountriesData } from '../actions/countriesDataActions.js';
import { connect } from 'react-redux';

class CountriesData extends Component {

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return <h2>Countries Data</h2>
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(getCountriesData())
  }
})

export default connect(null, mapDispatchToProps)(CountriesData);