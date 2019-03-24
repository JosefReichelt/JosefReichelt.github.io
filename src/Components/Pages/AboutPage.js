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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
             quasi architecto beatae vitae dicta sunt explicabo. Duis sapien nunc, commodo et, interdu
            </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
             quasi architecto beatae vitae dicta sunt explicabo. Duis sapien nunc, commodo et, interdu
            </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
             quasi architecto beatae vitae dicta sunt explicabo. Duis sapien nunc, commodo et, interdu
            </p>

        </div>
      </div>
    )
  }
}

export default AboutPage
