import React, { Component } from 'react';
import { connect } from 'react-redux';

class BucketList extends Component {

  constructor() {
    super();
    this.createListItems = this.createListItems.bind(this);
  }

  createListItems() {
    return this.props.bucketList.map(country => {
      return <li>{country.name}</li>
    })
  }

  render() {
    return <ul>{ this.createListItems() }</ul>
  }

}

const mapStateToProps = (state) => {
  return {
    bucketList: state.bucketList
  }
}

export default connect(mapStateToProps)(BucketList);