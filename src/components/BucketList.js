import React from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

const BucketList = (props) => {

  const createListItems = () => {
    return props.listItems.map((country, index) => {
      return <BucketListItem 
        name={ country.name } 
        visited ={ country.visited }
        onCheck={ (evt) => {props.visitedStatusChange(evt.target.id)} } 
        key={ index } />
    })
  }

  return props.listItems.length === 0 ? 
    <h5>Nothing in your list</h5> : 
    <ul className="bucket-list">{ createListItems() }</ul>

}

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch(toggleVisitedStatus(countryName));
  },
});

export default connect(null, mapDispatchToProps)(BucketList);