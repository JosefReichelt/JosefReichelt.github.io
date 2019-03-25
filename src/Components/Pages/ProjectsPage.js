import React, { Component } from 'react'
import styl from "./Pages.module.css";
import ProjectEntry from "./ProjectEntry";

export class ProjectsPage extends Component {
  render() {
    return (
      <div className={`${styl.PageBackground} ${styl.Projects}`}>
        <div className={styl.PageBlock}>
          <h1>Projekty které jsem vytvořil nebo se zúčastnil</h1>
          <ProjectEntry name="Kybernauts" info="Youtube kanal" />
        </div>
      </div>
    )
  }
}

export default ProjectsPage
