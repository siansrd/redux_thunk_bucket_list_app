import React, { Component } from 'react';
import CountriesData from './components/CountriesData.js';
import BucketList from './components/BucketList.js'

class App extends Component {
  render() {
    return (
      <>
        <h1>Bucket List App</h1>
        <CountriesData />
        <BucketList />
      </>
    );
  }
}

export default App;
