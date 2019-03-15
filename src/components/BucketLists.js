import React, { Component } from 'react';
import { connect } from 'react-redux';
import BucketList from './BucketList.js';

class BucketLists extends Component {

  filterListByVisted(status) {
    return this.props.bucketList.filter(item => item.visited === status)
  }

  render() {
    const visited = this.filterListByVisted(true);
    const notVisited = this.filterListByVisted(false);

    return <>
      <BucketList listItems={ notVisited } />
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