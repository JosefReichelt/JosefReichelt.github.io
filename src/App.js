import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import SocialBar from "./Components/Social/SocialBar";
import AboutPage from "./Components/Pages/AboutPage";
import GamesPage from "./Components/Pages/GamesPage";
import ProjectsPage from './Components/Pages/ProjectsPage';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Title />
        <AboutPage />
        <ProjectsPage />
        <GamesPage />
        <SocialBar />
      </div>

    );
  }
}

export default App;
