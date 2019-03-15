import React, { Component } from 'react';
import CountriesData from './containers/CountriesData.js';
import BucketLists from './containers/BucketLists.js';

class App extends Component {
  render() {
    return (
      <>
        <h1>Bucket List</h1>
        <h3>All the places you want to go before you die</h3>
        <CountriesData />
        <BucketLists />
      </>
    );
  }
}

export default App;
