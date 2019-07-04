import React, { Component } from 'react'
import photo from "../../../images/foto.jpg";
import TechList from "../TechList";

export class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">

        <div className="Headline">
          <h1>Pár informací o mně</h1>
          <img src={photo} alt="my face" />
        </div>

        <div className="Info">
          <p>
            Jmenuji se Josef Reichelt, je mi 26 let a jsem nadšenec do her, vývoje her a software.
          </p>
          <p>Také jsem velký fanda Star Wars, Lega a velice rád poslouchám soundtracky z her a filmů.</p>
          <p>
            Technologie které znám a ovládám:
        </p>
        </div>


        <div className="TechList">
          <TechList items={["C#", "HTML", "CSS", "JavaScript", "ES6"]} />
          <TechList items={["Unity", ".Net Core", "Node.js", "React", "discord.js", "DSharpPlus", "Wordpress"]} />
          <TechList items={["Blender", "Affinity Photo", "Affinity Designer", "Adobe Photoshop", "Aseprite", "Gimp", "Inkscape", "Krita"]} />
        </div>
      </div>
    )
  }
}

export default AboutPage
