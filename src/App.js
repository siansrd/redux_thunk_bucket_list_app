import React, { Component } from 'react';
import CountriesData from './components/CountriesData';

class App extends Component {
  render() {
    return (
      <>
        <h1>Bucket List App</h1>
        <CountriesData />
      </>
    );
  }
}

export default App;
