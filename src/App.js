import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import SocialBar from "./Components/Social/SocialBar";
import AboutPage from "./Components/Pages/AboutPage";
// import GamesPage from "./Components/Pages/GamesPage";
// import ProjectPage from "./Components/Pages/ProjectPage";



class App extends Component {
  render() {
    return (

      <div className="App">
        <Title />
        <div style={{ width: "100%", height: "20vh" }}>NAVIGACE</div>
        <AboutPage />
  
        <SocialBar />
      </div>

    );
  }
}

export default App;
