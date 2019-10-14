import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
export class Navigation extends Component {

  render() {
    return (
      <div className="navigation">
        <h1 className="navigation__title">JOSEF REICHELT</h1>
        <ul className="navigation__links">
          <li><HashLink smooth to="#informace" >informace</HashLink></li>
          <li><HashLink smooth to="#projekty" >projekty</HashLink></li>
          <li><HashLink smooth to="#hry" >hry</HashLink></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
