import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem.js';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

class BucketList extends Component {

  constructor() {
    super();
    this.createListItems = this.createListItems.bind(this);
    this.visitedStatusChange = this.visitedStatusChange.bind(this);
  }

  createListItems() {
    return this.props.listItems.map(country => {
      return <BucketListItem country={ country } onCheck={ this.visitedStatusChange } />
    })
  }

  visitedStatusChange(evt) {
    this.props.visitedStatusChange(evt.target.id);
  }

  render() {
    return this.props.listItems.length === 0 ? 
      <h5>Nothing in your list</h5> : 
      <ul className="bucket-list">{ this.createListItems() }</ul>
  }

}

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch(toggleVisitedStatus(countryName))
  }
})

export default connect(null, mapDispatchToProps)(BucketList);