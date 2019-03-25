import React, { Component } from 'react'
import styl from "./Pages.module.css";
import ProjectEntry from "./ProjectEntry";
import castleImg from "../../images/projects/brickthecastle.png";
import pacmanImg from "../../images/projects/sheriffpac.png";


export class GamesPage extends Component {
  render() {
    return (
      <div className={`${styl.PageBackground} ${styl.Games}`}>
        <div className={styl.PageBlock}>
          <h1>Hry které jsem vytvořil</h1>
          <ProjectEntry
            name="Brick the Castle"
            info="Jednoduchy breaker clone \n
            Zahrát si to můžete zde:"
            link="https://protomace.itch.io/brick-the-castle"
            img={castleImg} />
          <ProjectEntry
            name="Pacman"
            info="Jednoduchy pacman clone"
            img={pacmanImg}
          />

        </div>
      </div>
    )
  }
}

export default GamesPage
