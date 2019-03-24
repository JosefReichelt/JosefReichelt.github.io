import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import SocialBar from "./Components/Social/SocialBar";
import PageBlock from "./Components/Pages/PageBlock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <PageBlock>Ha </PageBlock>
        <SocialBar />
      </div>
    );
  }
}

export default App;
