import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketList from './BucketList.js';

const BucketLists = (props) => {
  
  return <>
    <h2>Still to Visit</h2>
    <BucketList listItems={ props.notVisited } />
    <h2>Visited</h2>
    <BucketList listItems={ props.visited } />
  </>

}

const mapStateToProps = state => {
  return {
    visited: state.bucketList.filter(item => item.visited === true),
    notVisited: state.bucketList.filter(item => item.visited === false)
  }
};

export default connect(mapStateToProps)(BucketLists);