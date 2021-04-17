import css from './Skills.scss';
import { skillsData } from '../../data/skills';


const createSkillItems = () => {
    return skillsData.map(skill=>{
        const skillElement = document.createElement('div');
        skillElement.className = css.item;
        skillElement.innerHTML = `
        <span>
        ${skill.name}
        </span>
        <svg viewBox="${skill.logo.viewBox}">
            <use href=${skill.logo.url} />
        </svg>
    `;
        return skillElement;
    });
};

class Skills extends HTMLElement{
    constructor() {
        super();
        createSkillItems().forEach((item)=>{
            this.appendChild(item);
        });
    }
}


window.customElements.define('jr-skills', Skills);