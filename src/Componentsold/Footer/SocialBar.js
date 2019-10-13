import React, { Component } from 'react'

import  Artstation  from "../../images/artstationMono.svg";
import  Email from "../../images/emailMono.svg";
import  Github  from "../../images/githubMono.svg";
import  Sketchfab  from "../../images/sketchfabMono.svg";
import  Twitter  from "../../images/twitterMono.svg";

export class SocialBar extends Component {

  buttonsData = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/JosefReichelt',
      img: <Twitter/>
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JosefReichelt',
      img: <Github/>
    },
    {
      name: 'Artstation',
      url: 'https://www.artstation.com/josefreichelt',
      img: <Artstation/>
    },
    {
      name: 'Sketchfab',
      url: 'https://sketchfab.com/JosefReichelt',
      img: <Sketchfab/>
    },
    {
      name: 'Mail',
      url: 'mailto:pepareichelt@gmail.com',
      img: <Email/>
    }
  ]


  generateButtons = () => (
    this.buttonsData.map(x => (
      <li key={x.name}>
        <a href={x.url} target="_blank" rel="noopener noreferrer" >
          {x.img}
        </a>
      </li>
    ))
  )

  render() {
    return (
      <div className="SocialBar">
        <ul>
          {this.generateButtons()}
        </ul>
      </div>
    )
  }
}

export default SocialBar
