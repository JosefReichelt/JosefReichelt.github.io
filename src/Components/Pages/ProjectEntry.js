import React, { Component } from 'react'


export class GameEntry extends Component {

  // Disables image if none is provided in props
  checkImage = () => {
    if (this.props.img == null) {
      console.log("No Image Provided in ProjectEntry");
    } else {
      return (
        <img src={this.props.img} alt={this.props.name} />
      )
    }
  }
  /// Disables link if none is provided in props
  checkLink = () => {
    if (this.props.link == null) {
      console.log("No Link provided in ProjectEntry");
    } else {
      return (
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.linkName}{this.props.name}</a>
      )
    }
  }
  // Returns multiple <p> elements split by \n 
  formatText = () => {
    let textToFormat = this.props.info;
    let formatted = textToFormat.split("\\n").map((item, k) => {
      return (
        <p key={k}>{item}</p>
      )
    }
    )
    return formatted;
  }

  render() {

    return (
      <div>
        {this.checkImage()}
        <h2>{this.props.name}</h2>
        {this.formatText()}
        {this.checkLink()}
      </div >
    )
  }
}

export default GameEntry
