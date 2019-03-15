import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem.js';
import { toggleVisitedStatus } from '../actions/bucketListActions';

class BucketList extends Component {

  constructor() {
    super();
    this.createListItems = this.createListItems.bind(this);
    this.visitedStatusChange = this.visitedStatusChange.bind(this);
  }

  createListItems() {
    return this.props.bucketList.map(country => {
      return <BucketListItem country={ country } onCheck={ this.visitedStatusChange } />
    })
  }

  visitedStatusChange(evt) {
    this.props.visitedStatusChange(evt.target.id);
  }

  render() {
    return <ul>{ this.createListItems() }</ul>
  }

}

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch(toggleVisitedStatus(countryName))
  }
})

const mapStateToProps = (state) => {
  return {
    bucketList: state.bucketList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);