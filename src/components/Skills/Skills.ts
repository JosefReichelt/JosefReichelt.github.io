import css from './Skills.scss';
import {
    ISkill, webSkillsData, softwareSkills, toolsSkills
} from '../../data/skills';

const createSkillsList = (skills:ISkill[]) => {
    const list = document.createElement('ul');
    list.className = css.list;
    skills.forEach(skill=>{
        const skillElement = document.createElement('li');
        skillElement.className = css.item;
        skillElement.innerHTML = `
        <svg viewBox="${skill.logo.viewBox}" class=${css.icon}>
        <use href=${skill.logo.url} />
        </svg>
        <span class=${css.name}>${skill.name}</span>
    `;
        list.appendChild(skillElement);
    });
    return list;
};

class Skills extends HTMLElement{
    constructor() {
        super();
        const title = document.createElement('h2');
        const content = document.createElement('div');
        this.className = 'sectionBlock';
        content.className = css.content;
        title.innerText = 'dovednosti';
        title.className = 'sectionTitle';
        this.appendChild(title);
        content.appendChild(createSkillsList(webSkillsData));
        content.appendChild(createSkillsList(toolsSkills));
        content.appendChild(createSkillsList(softwareSkills));
        this.appendChild(content);
    }
}


window.customElements.define('jr-skills', Skills);