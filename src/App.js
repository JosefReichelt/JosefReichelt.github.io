import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Style/Main.scss';
import Title from "./Components/Title";
import SideBar from './Components/SideBar/SideBar';
import AboutPage from './Components/Pages/About/AboutPage';
import GamesPage from './Components/Pages/GamesPage';
import ProjectsPage from './Components/Pages/ProjectsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Title />
            <Route path="/" exact component={AboutPage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/games" exact component={GamesPage} />
          </div>
          <SideBar />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
