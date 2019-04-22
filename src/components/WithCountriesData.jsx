import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const WithCountriesData = (props) => {
  const { component: Component, countries } = props;
  return <Component {...props} countries={countries} />;
};

const mapStateToProps = state => ({ countries: state.countriesData });

export default connect(mapStateToProps)(WithCountriesData);

WithCountriesData.propTypes = {
  component: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
