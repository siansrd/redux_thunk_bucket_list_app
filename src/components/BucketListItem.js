import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  visitedStatusChanged() {
    debugger
  }
})

export default connect(null, mapDispatchToProps)(BucketListItem)