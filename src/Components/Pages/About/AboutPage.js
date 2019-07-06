import React, { Component } from 'react'
import photo from "../../../images/foto.jpg";
import TechList from "./TechList";

export class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">

        <div className="Headline">
          <h4>Pár informací o mně</h4>
          <img src={photo} alt="my face" />
        </div>

        <div className="Info">
          <p>
            Jmenuji se Josef Reichelt, je mi 26 let a jsem nadšenec do her, vývoje her a software.
          </p>
          <p>
            Technologíí jsem byl vždy obklopen a rád jsem se jí zabýval. V současné chvíli kromě zlepšování front-end skillů zkoumám programovací jazyk Rust.
          </p>
          <p>Také jsem velký fanda Star Wars, Lega a velice rád poslouchám soundtracky z her a filmů.</p>
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
