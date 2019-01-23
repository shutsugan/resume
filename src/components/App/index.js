import React, { Component } from 'react';

import Head from '../Head';
import Hero from '../Hero';
import Technologies from '../Technologies';
import WorkExperience from '../WorkExperience';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Hero />
        <Technologies />
        <WorkExperience />
      </div>
    );
  }
}

export default App;
