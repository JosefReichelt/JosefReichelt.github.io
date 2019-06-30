import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Style/Main.scss';
import Title from "./Components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <BrowserRouter>

        </BrowserRouter>
      </div>

    );
  }
}

export default App;
