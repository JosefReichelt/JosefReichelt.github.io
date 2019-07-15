import React, { Component } from 'react'

import ProjectEntry from "../ProjectEntry";
import kyberImage from "../../../images/projects/kybernauts.png";
import gamedevImage from "../../../images/projects/gdcs.png";

export class ProjectsPage extends Component {
  componentDidMount(){
    this.props.hideMenu();
  }

  render() {
    return (
      <div className="ProjectsPage">
          <h2>Projekty které jsem vytvořil nebo se zúčastnil</h2>

          <div className="Projects">
          <ProjectEntry
            name="Kybernauts"
            info="Youtube kanál kde se nám podařilo nasbírat až 22 tisíc odběratelů, poté jsme se přesunuli k Indian Play."
            link="https://www.youtube.com/channel/UCI6Q19WD34-lg0-HWPvkFXg"
            linkName=" Youtube kanál "
            img={kyberImage} 
            />
          <ProjectEntry
            name="Gamedev Komunita"
            info="Discordí server určený pro české a slovenské vývojáře.
            V současnosti tu máme okolo 100 členů."
            link="https://discord.gg/SEzzru6"
            linkName="Discord server "
            img={gamedevImage} 
            />
          </div>
      </div>
    )
  }
}

export default ProjectsPage
