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
        <div style={{ width: "100%", height: "10vh" }}>NAVIGACE</div>
        <AboutPage />
        <GamesPage />
        <ProjectsPage />
        <SocialBar />
      </div>

    );
  }
}

export default App;
