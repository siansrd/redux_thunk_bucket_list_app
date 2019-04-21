import React from 'react';
import './BucketListItem.css';

const BucketListItem = ({ name, visited, onCheck }) => {

  return (
    <li>
      <input 
        type="checkbox" 
        onChange={ onCheck }
        checked={ visited }
        id={ name } 
        className="visited-checkbox"
      />
      <p className="country-name">{ name }</p>
    </li>
  )
}

export default BucketListItem;