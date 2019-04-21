import React from 'react';
import { connect } from 'react-redux';

const WithCountriesData = (props) => {
  const { Component, countries } = props;
  return <Component {...props} />;
};


const mapStateToProps = state => ({ countries: state.countriesData });

export default connect(mapStateToProps)(WithCountriesData);
