import { TemplateResult, html } from "lit-html";
import style from "./ProjectCard.css";
import { Project } from "../../data/projects";
import { linkLogo, githubLogo } from "../logo/logo";


export const ProjectsCard = (project: Project): TemplateResult => html`
    <div class="${style.card}">
        <div class="${style.cardTitle}">
            ${project.name}
        </div>
    
        <div class="${style.cardBody}">
            <div class=${style.cardImage}>
                <img src=${project.image} />
            </div>
            <div class="${style.cardText}">
                <span>
                    ${project.desc}
                </span>
                <div class=${style.cardLinks}>
                    ${project.tech.map(t => html`
                        <span class=${style.cardTechBubble}> 
                            ${t}
                        </span>
                        `
                    )}
                    ${project.link && html`
                        <a class=${style.cardLink} href=${project.link} alt=${project.name} target="_blank">
                            ${linkLogo}
                        </a>
                    `}
                    ${project.github && html`
                        <a class=${style.cardLink} href=${project.github} alt=${project.name} target="_blank">
                            ${githubLogo}
                        </a>
                    `}
                </div>
            </div>
        </div>
    </div>
`;
