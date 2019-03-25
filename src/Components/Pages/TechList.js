import React, { Component } from 'react'

export class TechList extends Component {

  makeList = () => {
    let listItems = this.props.items;
    listItems = listItems.map((item, key) => {
      return (
        <li key={key}>{item}</li>
      )
    });
    return listItems;
  }

  render() {
    return (
      <ul>
        {this.makeList()}
      </ul>
    )
  }
}

export default TechList
