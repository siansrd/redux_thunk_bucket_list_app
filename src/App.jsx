import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountriesData } from './actions/countriesDataActions';
import BucketListData from './components/BucketListData';
import BucketList from './components/BucketList';
import WithCountriesData from './components/WithCountriesData';
import Select from './components/Select';

class App extends Component {
  componentDidMount() {
    const { onPageLoad } = this.props;
    onPageLoad();
  }

  render() {
    return (
      <>
        <h1>Bucket List</h1>
        <h3>All the places you want to go before you die</h3>
        <WithCountriesData component={Select} />
        <h2>Still to Visit</h2>
        <BucketListData component={BucketList} filter={{visited: false}} />
        <h2>Visited</h2>
        <BucketListData component={BucketList} filter={{visited: true}} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(getCountriesData());
  },
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  onPageLoad: PropTypes.func.isRequired,
};
