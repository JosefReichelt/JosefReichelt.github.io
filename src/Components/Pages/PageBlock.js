import React, { Component } from 'react'
import styl from "./PageBlock.module.css";

export class PageBlock extends Component {
  render() {
    return (
      <div className={styl.PageBackground}>
        <div className={styl.PageBlock}>
          {this.props.children}
        </div >
      </div>
    )
  }
}

export default PageBlock
