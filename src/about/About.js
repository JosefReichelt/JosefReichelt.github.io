import React, { Component } from "react";
import photo from "../images/foto.jpg";
import techList from "./techList.json";

export class About extends Component {


  renderTechBubbles = () => {
    const bubbles = [];

    for (const category in techList) {
      const itemList = techList[category];
      bubbles.push(
        <div key={`cat:${category}`} className="about-me__tech-category">
          {itemList.map((x, idx) => (
            <div key={`bubble:${x}:${idx}`} className="about-me__tech-bubble">
              {x}
            </div>
          ))}
        </div>
      );
    }
    return bubbles;
  }

  render() {
    return (
      <div className="about-me" id="info">
        <div className="about-me__face">
          <img src={photo} alt="my face" />
          <i>agilní front-end vývojář a game-dev</i>
        </div>
        <div className="about-me__desc">
          <p>
            Jsem velký nadšenec do vývoje software a her. Vyzkoušel jsem spousty různých technologií a postupů a stále se zajímám o nově příchozí technologie.
            V současné chvíli se specializuji na vývoj front-endu v Reactu a vývoji her v Unity.
          </p>
        </div>
        <div className="about-me__techlist">
          <h4>Mezi technologie které znám a ovládám patří:</h4>
          {this.renderTechBubbles()}
        </div>
      </div>
    );
  }
}

export default About;
