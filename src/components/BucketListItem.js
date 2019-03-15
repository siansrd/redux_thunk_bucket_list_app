import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleVisitedStatus } from '../actions/bucketListActions';

class BucketListItem extends Component {

  visitedStatusChanged(evt) {
    const name = evt.target.id;
    this.props.visitedStatusChanged(name);
  }

  render() {
    const { name, visited } = this.props.country

    return (
      <li>
        <p>{ name }</p>
        <input 
          type="checkbox" 
          checked={ visited }
          id={ name }
          onChange={ evt => this.visitedStatusChanged(evt) } 
        />
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  visitedStatusChanged(countryName) {
    dispatch(toggleVisitedStatus(countryName))
  }
})

export default connect(null, mapDispatchToProps)(BucketListItem)