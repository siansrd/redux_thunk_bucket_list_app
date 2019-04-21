import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToBucketList } from '../actions/bucketListActions';

const Select = ({ countries, countrySelected }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (evt) => {
    const country = evt.target.value;
    setSelected(country);
    countrySelected(country);
  };

  const options = () => (
    countries.map(country => (
      <option value={country.name} key={country.alpha3Code}>{country.name}</option>
    ))
  );

  return (
    <select onChange={evt => handleChange(evt)} value={selected}>
      <option value="" disabled />
      { options() }
    </select>
  );
};

const mapDispatchToProps = dispatch => ({
  countrySelected(countryName) {
    dispatch(addToBucketList({ name: countryName, visited: false }));
  },
});

export default connect(null, mapDispatchToProps)(Select);

Select.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  countrySelected: PropTypes.func.isRequired,
};
