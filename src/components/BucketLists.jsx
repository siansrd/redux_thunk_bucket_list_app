import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BucketList from './BucketList';

const BucketLists = ({ notVisited, visited }) => (
  <>
    <h2>Still to Visit</h2>
    <BucketList listItems={notVisited} />
    <h2>Visited</h2>
    <BucketList listItems={visited} />
  </>
);

const mapStateToProps = state => ({
  visited: state.bucketList.filter(item => item.visited === true),
  notVisited: state.bucketList.filter(item => item.visited === false),
});

export default connect(mapStateToProps)(BucketLists);

BucketLists.propTypes = {
  notVisited: PropTypes.arrayOf(PropTypes.object).isRequired,
  visited: PropTypes.arrayOf(PropTypes.object).isRequired,
};
