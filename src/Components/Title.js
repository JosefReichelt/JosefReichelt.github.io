import React, { Component } from 'react'
import styl from "./Title.module.css";

export class Title extends Component {

  render() {
    return (
      <header className={styl.Header} >
        <h1 className={styl.Title}>
          Josef Reichelt
        </h1>
        <h2 className={styl.Subtitle}>
          aspirující vývojář
        </h2>
      </header>
    )
  }
}

export default Title
