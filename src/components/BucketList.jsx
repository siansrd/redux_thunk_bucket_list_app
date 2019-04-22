import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BucketListItem from './BucketListItem';
import { toggleVisitedStatus } from '../actions/bucketListActions';
import './BucketList.css';

const BucketList = ({ listData, visitedStatusChange, filter }) => {
  const filterData = () => {
    return listData.filter(country => country.visited === filter.visited)
  }

  const createListItems = () => {
    const data = filter ? filterData() : listData;
    return data.map(country => (
      <BucketListItem
        name={country.name}
        visited={country.visited}
        onCheck={evt => visitedStatusChange(evt.target.id)}
        key={country.name}
      />
    ));
  }

  return createListItems().length === 0
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
  listData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  visitedStatusChange: PropTypes.func.isRequired,
};
