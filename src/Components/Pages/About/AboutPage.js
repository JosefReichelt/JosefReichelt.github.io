import React, { Component } from 'react'
import photo from "../../../images/foto.jpg";
import TechList from "./TechList";

export class AboutPage extends Component {

  componentDidMount(){
    this.props.hideMenu();
  }


  render() {
    return (
      <div className="AboutPage">

        <div className="Headline">
          <img src={photo} alt="my face" />
          <i>Web developer, designer, game maker</i>
        </div>

        <div className="Info">
          <h1>Josef Reichelt</h1>
          <p>
            Jsem nadšenec do vývoje her a software. Vyzkoušel jsem spousty různých technologií a postupů a zajímám se i o nově příchozí technologie.
          </p>
          <p>
            V současné chvíli se specializuji na vývoj front-endu v Reactu a také zkoumám programovací jazyk Rust.
          </p>
        </div>


        <div className="Lists">
          <h4>
            Mezi technologie které znám a ovládám patří:
        </h4>
          <TechList title="Web technologie" items={[
            "HTML", "CSS", "SASS", "JavaScript", "ES6", "React", "Redux",
            "Webpack", "Eslint", "Babel", "Node","Express", "Wordpress",
            ]} />
          <TechList title="Ostatní Technologie" items={["Git", "C#",".Net Core", "Unity", "discord.js", "DSharpPlus",]} />
          <TechList title="Aplikace" items={[
            "Blender", "Affinity Photo", "Affinity Designer", "Adobe Photoshop", "Aseprite", "Gimp", "Inkscape", "Krita",
            "Visual Studio", "Visual Studio Code"
            ]} />
        </div>
      </div>
    )
  }
}

export default AboutPage
