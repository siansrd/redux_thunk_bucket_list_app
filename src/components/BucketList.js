import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem.js';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

class BucketList extends Component {

  createListItems() {
    return this.props.listItems.map(country => {
      return <BucketListItem 
        country={ country } 
        onCheck={ (evt) => {this.props.visitedStatusChange(evt.target.id)} } />
    })
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