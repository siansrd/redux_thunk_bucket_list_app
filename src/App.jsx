import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountriesData } from './actions/countriesDataActions';
import BucketLists from './components/BucketLists';
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
        <BucketLists />
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
