import React, { Component } from 'react'
import styl from "./Social.module.css";

import artstation from "../../images/artstation.png";
import email from "../../images/email.png";
import github from "../../images/github.png";
import sketchfab from "../../images/sketchfab.png";
import twitter from "../../images/twitter.png";


export class SocialButton extends Component {

  switchImage = () => {
    let img = {};
    let lnk = "";
    switch (this.props.name) {
      case "twitter":
        img = twitter;
        lnk = "https://twitter.com/Protomace";
        break;
      case "github":
        img = github;
        lnk = "https://github.com/JosefReichelt";
        break;
      case "artstation":
        img = artstation;
        lnk = "https://www.artstation.com/josefreichelt";
        break;
      case "sketchfab":
        img = sketchfab;
        lnk = "https://sketchfab.com/JosefReichelt";
        break;
      case "email":
        img = email;
        lnk = "mailto:josefreichelt@outlook.cz";
        break;
      default:
        break;
    }


    return {
      image: img,
      link: lnk
    }
  }

  render() {
    let switched = this.switchImage();
    return (
      <a href={switched.link} target="_blank" rel="noopener noreferrer" ><img alt={this.props.name} src={switched.image} className={styl.SocialButton} /></a>
    )
  }
}

export default SocialButton
