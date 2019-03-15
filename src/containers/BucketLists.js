import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketList from '../components/BucketList.js';

class BucketLists extends Component {

  filterListByVisted(status) {
    return this.props.bucketList.filter(item => item.visited === status)
  }

  render() {
    const visited = this.filterListByVisted(true);
    const notVisited = this.filterListByVisted(false);

    return <>
      <h2>Still to Visit</h2>
      <BucketList listItems={ notVisited } />
      <h2>Visited</h2>
      <BucketList listItems={ visited } />
    </>
  }

}

const mapStateToProps = state => {
  return {
    bucketList: state.bucketList
  }
};

export default connect(mapStateToProps)(BucketLists);