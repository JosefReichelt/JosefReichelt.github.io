import React, { Component } from 'react'
import styl from "./Title.module.css";

export class Title extends Component {

  render() {
    return (
      <header >
        <h1 className={styl.Title}>
          Josef Reichelt
        </h1>
        <h2 className={styl.Subtitle}>
          aspiring game developer
        </h2>
      </header>
    )
  }
}

export default Title
