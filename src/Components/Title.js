import React, { Component } from 'react'
import logo from '../images/logoMono.svg'

export class Title extends Component {

  render() {
    return (
      <header className="Title-Main">
        
        <div>
          <h1>
            Josef Reichelt
        </h1>
          <h2>
            Aspirující vývojář, designer a game maker
        </h2>
        </div>
        <img src={logo} alt="JR Logo"/> 
        
      </header>
    )
  }
}

export default Title
