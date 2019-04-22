import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BucketListData = (props) => {
  const { component: Component, listData } = props;
  return <Component {...props} listData={listData} />;
};

const mapStateToProps = state => ({
  listData: state.bucketList,
});

export default connect(mapStateToProps)(BucketListData);

BucketListData.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  component: PropTypes.func.isRequired,
};
