import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem.js';

class BucketList extends Component {

  constructor() {
    super();
    this.createListItems = this.createListItems.bind(this);
  }

  createListItems() {
    return this.props.bucketList.map(country => {
      return <BucketListItem country={ country } />
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