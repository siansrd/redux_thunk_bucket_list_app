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
    return props.countries.map((country, index) => {
      return <option value={country.name} key={index}>{country.name}</option>
    })
  }

  return (
    <select onChange={ evt => handleChange(evt) } value={ selected }>
      <option value="" selected disabled ></option>
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