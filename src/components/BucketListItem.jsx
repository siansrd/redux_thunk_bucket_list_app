import React from 'react';
import PropTypes from 'prop-types';
import './BucketListItem.css';

const BucketListItem = ({ name, visited, onCheck }) => (
  <li>
    <input
      type="checkbox"
      onChange={onCheck}
      checked={visited}
      id={name}
      className="visited-checkbox"
    />
    <p className="country-name">{ name }</p>
  </li>
);

export default BucketListItem;

BucketListItem.propTypes = {
  name: PropTypes.string.isRequired,
  visited: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
};
