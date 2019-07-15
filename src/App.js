import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Style/Main.scss';

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
            <Route path="/" exact render={(routeProps)=> <AboutPage hideMenu={this.hideMenu} {...routeProps}/>}/>
            <Route path="/projects" exact render={(routeProps) => <ProjectsPage hideMenu={this.hideMenu} {...routeProps} />} />
            <Route path="/games" exact render={(routeProps) => <GamesPage hideMenu={this.hideMenu} {...routeProps} />} />
          </div>
          <button
            onClick={() => { this.setState({ showMenu: !this.state.showMenu }) }}
            className={`SideBarButton ${this.state.showMenu ? 'show' : ""}`}
            >
            ☰
            </button>
          <SideBar hideMenu={this.hideMenu} show={this.state.showMenu} />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
