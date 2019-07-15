import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logoMono.svg';


class SideBar extends Component {

  constructor(props){
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown',this.handleClick,false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    // Click inside
    if(this.node.contains(e.target)){
      return;
    }
    // Clicked on menu button
    if(e.target.classList.contains("SideBarButton")){
     return;
    }
    // Click outside
    this.props.hideMenu();
  }

  render() {
    return (
      <div ref={node => this.node = node}  className={`SideBar ${this.props.show ? 'show' : ""}`}>
        <Logo />
        <ul>
          <li><Link to="/">Informace</Link></li>
          <li><Link to="/projects">Projekty</Link></li>
          <li><Link to="/games">Hry</Link></li>
        </ul>

      </div>
    )
  }
}

export default SideBar
