import React from 'react';
import { connect } from 'react-redux';

const WithCountriesData = (props) => {
  const Component = props.component
  return (
    <Component { ...props } countriesData={props.countries} /> 
  )
}

const mapStateToProps = state => ({ countries: state.countriesData });

export default connect(mapStateToProps)(WithCountriesData)