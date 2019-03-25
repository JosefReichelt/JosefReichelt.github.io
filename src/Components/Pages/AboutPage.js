import React, { Component } from 'react'
import photo from "../../images/foto.png";
import TechList from "./TechList";
import styl from "./Pages.module.css";

export class AboutPage extends Component {
  render() {
    return (
      <div className={`${styl.PageBackground} ${styl.About}`}>
        <div className={styl.PageBlock}>


          <img src={photo} alt="my face" />
          <h1>Pár informací o mně</h1>
          <p>
            Jmenuji se Josef Reichelt, je mi 26 let a jsem nadšenec do her, vývoje her a software.
          </p>
          <p>Také jsem velký fanda Star Wars, Lega a velice rád poslouchám soundtracky z her a filmů.</p>
          <p>
            Technologie které znám a ovládám:
            </p>
          <TechList items={["C#", "HTML", "CSS", "JavaScript", "ES6"]} />
          <TechList items={["Unity", ".Net Core", "Node.js", "React", "discord.js", "DSharpPlus", "Wordpress"]} />
          <TechList items={["Blender", "Affinity Photo", "Affinity Designer", "Adobe Photoshop", "Aseprite", "Gimp", "Inkscape", "Krita"]} />
        </div>
      </div>
    )
  }
}

export default AboutPage
