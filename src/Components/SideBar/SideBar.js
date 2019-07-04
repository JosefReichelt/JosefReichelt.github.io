import React from 'react';
import { Link } from 'react-router-dom';
import SocialBar from './SocialBar';
import CopyrightNotice from './CopyrightNotice';

const SideBar = () => {
  return (
    <div className="SideBar">
      <ul>
        <li><Link to="/">Informace</Link></li>
        <li><Link to="/projects">Projekty</Link></li>
        <li><Link to="/games">Hry</Link></li>
      </ul>
      <SocialBar/>
      <CopyrightNotice/>
    </div>
  )
}

export default SideBar
