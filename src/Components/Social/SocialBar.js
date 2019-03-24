import React, { Component } from 'react'
import styl from "./Social.module.css";
import SocialButton from "./SocialButton";

export class SocialBar extends Component {
  render() {
    return (
      <footer className={styl.SocialBar}>
        <SocialButton name="twitter" />
        <SocialButton name="github" />
        <SocialButton name="email" />
        <SocialButton name="artstation" />
        <SocialButton name="sketchfab" />
      </footer>
    )
  }
}

export default SocialBar
