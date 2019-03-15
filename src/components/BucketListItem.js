import React from 'react';

const BucketListItem = (props) => {
  const { name, visited } = props.country;

  return (
    <li>
      <p>{ name }</p>
      <input 
        type="checkbox" 
        onChange={ props.onCheck }
        checked={ visited }
        id={ name } 
      />
    </li>
  )
}

export default BucketListItem;