import React, { Component } from 'react'
import ProjectEntry from "../ProjectEntry";
import castleImg from "../../../images/projects/brickthecastle.png";
import pacmanImg from "../../../images/projects/sheriffpac.png";
import stamperImg from "../../../images/projects/stamperman.jpg";

export class GamesPage extends Component {
  componentDidMount() {
    this.props.hideMenu();
  }

  render() {
    return (
      <div className="GamesPage">
        <h2>Hry které jsem vytvořil</h2>

        <div className="Games">
          <ProjectEntry
            name="Brick the Castle"
            info="Klon Arkanoidu  s trochou úprav vytvořený v Unity během 72 hodin pro GDL GameJam."
            link="https://protomace.itch.io/brick-the-castle"
            linkName=" Zahrát si "
            img={castleImg} />
          <ProjectEntry
            name="Sheriff Pac"
            info="Klon pacmana v Unity a byl vytvořena během 72 hodin pro GameJam."
            img={pacmanImg}
            linkName=" Zahrát si "
            link="https://protomace.itch.io/sheriff-pac"
          />
          <ProjectEntry
            name="Stamperman"
            info="VR Hra ve spolupráci s Mariánem Hlaváčem na VR Hackathonu. Bohužel nedokončená."
            img={stamperImg}
          />
        </div>
      </div>
    )
  }
}

export default GamesPage
