import { IProject, projects } from 'src/data/projects';
import css from './Projects.scss';

const createProjectEntry = (project: IProject) => {
    const projectEntry = document.createElement('li');
    const content = document.createElement('div');
    const projectImage = document.createElement('img');
    const projectTitle = document.createElement('h3');
    const descriptionWrapper = document.createElement('div');
    const descriptionText = document.createElement('p');
    const usedTechList = document.createElement('ul');
    const projectLink = document.createElement('a');

    projectEntry.className = css.entry;
    content.className = css.content;
    descriptionWrapper.className = css.wrapper;
    usedTechList.className = css.usedTechList;

    projectImage.src = project.image;
    descriptionText.innerText = project.desc;
    projectTitle.innerText = project.name;

    projectEntry.appendChild(projectTitle);
    projectEntry.appendChild(content);
    content.appendChild(projectImage);
    for (const tech of project.tech){
        const techItem = document.createElement('span');
        techItem.innerText = tech;
        techItem.className = css.techItem;

        usedTechList.appendChild(techItem);
    }
    descriptionWrapper.appendChild(descriptionText);
    descriptionWrapper.appendChild(usedTechList);
    if (project.link){
        projectLink.href = project.link;
        projectLink.innerText = project.link.slice(project.link.indexOf('//') + 2);
        descriptionWrapper.appendChild(projectLink);
    }
    content.appendChild(descriptionWrapper);
    return projectEntry;
};


class Projects extends HTMLElement{
    constructor() {
        super();
        const title = document.createElement('h2');
        const projectList = document.createElement('ul');

        this.className = 'sectionBlock';
        title.innerText = 'projekty';
        title.className = 'sectionTitle';
        projectList.className = css.projectList;

        for (const proj of projects){
            projectList.appendChild(createProjectEntry(proj));
        }

        this.appendChild(title);
        this.appendChild(projectList);
    }
}


window.customElements.define('jr-projects', Projects);