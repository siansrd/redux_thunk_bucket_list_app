import React from 'react';
import { connect } from 'react-redux';

const WithCountriesData = ({ Component }) => (
  <Component { ...props } countriesData={props.countries} /> 
)


const mapStateToProps = state => ({ countries: state.countriesData });

export default connect(mapStateToProps)(WithCountriesData)