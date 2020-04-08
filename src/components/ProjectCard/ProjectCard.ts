import { TemplateResult, html } from "lit-html";
import style from "./ProjectCard.css";
import { Project } from "../../data/projects";


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
                <div>
                    ${project.tech.map(t => html`
                        <span class=${style.cardTechBubble}> 
                            ${t}
                        </span>
                        `
                        )}
                    </div>
            </div>
        </div>
    </div>
`;
