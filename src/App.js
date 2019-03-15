import React, { Component } from 'react';
import CountriesData from './components/CountriesData.js';
import BucketList from './components/BucketList.js';
import BucketLists from './components/BucketLists.js';

class App extends Component {
  render() {
    return (
      <>
        <h1>Bucket List App</h1>
        <CountriesData />
        <BucketLists />
      </>
    );
  }
}

export default App;
