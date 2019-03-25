import React, { Component } from 'react'
import photo from "../../images/foto.png";

import styl from "./Pages.module.css";

export class AboutPage extends Component {
  render() {
    return (
      <div className={`${styl.PageBackground} ${styl.About}`}>
        <div className={styl.PageBlock}>


          <img src={photo} alt="my face" />
          <h1>Pár informací o mně</h1>
          <p>
            Jmenuji se Josef Reichelt, je mi 26 let a jsem nadšenec do her, herního vývoje a software technologií.
            </p>
          <p>
            Technologie které ovládám:
            </p>

        </div>
      </div>
    )
  }
}

export default AboutPage
