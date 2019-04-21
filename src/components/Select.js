import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToBucketList } from '../actions/bucketListActions.js';

const Select = (props) => {

  const [selected, setSelected] = useState("")

  const handleChange = (evt) => {
    const country = evt.target.value
    setSelected(country)
    props.countrySelected(country)
  }

  const options = () => {
    return props.countries.map((country) => {
      return <option value={country.name} key={country.alpha3Code}>{country.name}</option>
    })
  }

  return (
    <select onChange={ evt => handleChange(evt) } value={ selected } >
      <option value="" disabled ></option>
      { options() }
    </select>
  )

}

const mapDispatchToProps = dispatch => ({
  countrySelected(countryName) {
    dispatch(addToBucketList({name: countryName, visited: false}))
  }
})

export default connect(null, mapDispatchToProps)(Select)