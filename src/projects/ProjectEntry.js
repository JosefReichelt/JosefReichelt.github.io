import React from "react";
import GithubIcon from "../images/githubMono.svg";
import ItchIcon from "../images/itchio.svg";
import LinkIcon from "../images/link.svg";

const ProjectEntry = (props) => {
  const { project } = props;

  return (
    <div className="projects__entry">
      <img className="projects__entry__image" src={project.image} />
      <div className="projects__entry__body">
        <div className="projects__entry__title">
          {project.name}
          <div className="projects__entry__links">
            {project.link && <a target="_blank" href={project.link}><LinkIcon /></a>}
            {project.github && <a target="_blank" href={project.github}><GithubIcon /></a>}
            {project.itchio && <a target="_blank" href={project.itchio}><ItchIcon /></a>}
          </div>
        </div>
        {project.desc}
      </div>
    </div>
  );
};

export default ProjectEntry;
