import React, { Component } from 'react';
import { getCountriesData } from './actions/countriesDataActions';
import BucketLists from './components/BucketLists.js';
import Select from './components/Select';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.onPageLoad()
  }

  render() {
    return (
      <>
        <h1>Bucket List</h1>
        <h3>All the places you want to go before you die</h3>
        <Select />
        <BucketLists />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPageLoad() {
    dispatch(getCountriesData())
  }
})

export default connect(null, mapDispatchToProps)(App);
