import React, { Component } from 'react';
import { stringify } from 'querystring';

class Country extends Component {

  render() {
    const { name, visited } = this.props.country

    return (
      <li>
        <p>{ name }</p>
        <p>{ visited.toString() }</p>
      </li>
    )
  }
}

export default Country