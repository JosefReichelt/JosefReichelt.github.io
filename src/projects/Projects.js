import React, { Component } from "react";
import { projects } from "./projectsData";
import ProjectEntry from "./ProjectEntry";

export class Projects extends Component {


  renderProjects = () => {
    return projects.map(p => (
      <ProjectEntry key={p.id} project={p}></ProjectEntry>
    ));
  }


  render() {
    return (
      <div className="projects" id="projects">
        <h4>Mezi projekty které jsem vytvořil nebo se na nich podílel patří:</h4>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
