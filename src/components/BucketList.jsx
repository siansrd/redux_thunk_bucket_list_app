import React from 'react';
import { connect } from 'react-redux';
import BucketListItem from './BucketListItem';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

const BucketList = ({ country, listItems, visitedStatusChange }) => {
  const createListItems = () => {
    return listItems.map((country, index) => (
      <BucketListItem
        name={country.name}
        visited={country.visited}
        onCheck={evt => visitedStatusChange(evt.target.id)}
        key={index} 
      />
    ));
  };

  return listItems.length === 0 ? 
    <h5>Nothing in your list</h5> : 
    <ul className="bucket-list">{ createListItems() }</ul>

}

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch(toggleVisitedStatus(countryName));
  },
});

export default connect(null, mapDispatchToProps)(BucketList);
