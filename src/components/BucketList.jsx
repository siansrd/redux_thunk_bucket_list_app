import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BucketListItem from './BucketListItem';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

const BucketList = ({ listItems, visitedStatusChange }) => {
  const createListItems = () => (listItems.map((country, index) => (
    <BucketListItem
      name={country.name}
      visited={country.visited}
      onCheck={evt => visitedStatusChange(evt.target.id)}
      key={index} 
    />
  )));

  return listItems.length === 0
    ? <h5>Nothing in your list</h5>
    : <ul className="bucket-list">{ createListItems() }</ul>;
};

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch(toggleVisitedStatus(countryName));
  },
});

export default connect(null, mapDispatchToProps)(BucketList);

BucketList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  visitedStatusChange: PropTypes.func.isRequired,
};
