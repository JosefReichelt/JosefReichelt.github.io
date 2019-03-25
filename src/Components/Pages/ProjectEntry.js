import React, { Component } from 'react'

export class GameEntry extends Component {

  checkImage = () => {
    if (this.props.img == null) {
      console.log("No Image Provided in ProjectEntry");
    } else {
      return (
        <img src={this.props.img} alt={this.props.name} />
      )
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>
          {this.props.info}<br />
          {this.checkImage()}



          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
           quasi architecto beatae vitae dicta sunt explicabo. Duis sapien nunc, commodo et, interdu
            </p>
      </div >
    )
  }
}

export default GameEntry
