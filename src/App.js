import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Style/Main.scss';
import Title from "./Components/Title";
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';
import AboutPage from './Components/Pages/About/AboutPage';
import GamesPage from './Components/Pages/Games/GamesPage';
import ProjectsPage from './Components/Pages/Projects/ProjectsPage';


class App extends Component {

  state = {
    showMenu: false
  }

  hideMenu = () => {
    this.setState({
      showMenu: false
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Main">
            <Title />
            <Route path="/" exact component={AboutPage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/games" exact component={GamesPage} />
            <Footer />
          </div>
          <button
            onClick={() => { this.setState({ showMenu: !this.state.showMenu }) }}
            className={`SideBarButton ${this.state.showMenu ? 'show' : ""}`}
            >
            ☰
            </button>
          <SideBar hideMenu={() => this.hideMenu()} show={this.state.showMenu} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
