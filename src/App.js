import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import SocialBar from "./Components/Social/SocialBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <SocialBar />
      </div>
    );
  }
}

export default App;
