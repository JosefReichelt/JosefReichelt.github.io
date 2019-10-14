import React, { Component } from 'react';
import "./styles/main.css";
import About from './about/About';
import Navigation from './navigation/Navigation';

class App extends Component {
 

  render() {
    return (
      <div className="main">
        <Navigation />
        <About/>
      </div>

    );
  }
}

export default App;
