import { TemplateResult, html } from "lit-html";
import style from "./Projects.css";
import { projects } from "../../data/projects";
import { ProjectsCard } from "../ProjectCard/ProjectCard";


export const Projects: TemplateResult = html`
    <div class="${style.projects}">
        ${projects.map(project => ProjectsCard(project))}
    </div>
`;