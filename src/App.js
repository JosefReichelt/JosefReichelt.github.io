import React, { Component } from 'react';
import "./styles/main.css";
import About from './about/About';
import Navigation from './navigation/Navigation';
import Projects from './projects/Projects';

class App extends Component {


  render() {
    return (
      <div className="main">
        <Navigation />
        <About />
        <Projects />
      </div>

    );
  }
}

export default App;
