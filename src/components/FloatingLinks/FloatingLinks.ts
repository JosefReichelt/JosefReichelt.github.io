import emailIcon from '_assets/icons/email.svg?sprite';
import githubIcon from '_assets/icons/github.svg?sprite';
import linkedinCircleIcon from '_assets/icons/linkedin-circle.svg?sprite';
import { Sprite } from '../Sprite/Sprite';
import css from './FloatingLinks.scss';

const linksData = [
    {
        url: 'mailto:pepareichelt@gmail.com',
        name: 'Email',
        icon: emailIcon,
    },
    {
        url: 'https://github.com/roborytir',
        name: 'Github',
        icon: githubIcon,
    },
    {
        url: 'https://www.linkedin.com/in/josefreichelt',
        name: 'LinkedIn',
        icon: linkedinCircleIcon,
    }
];


class FloatingLinks extends HTMLElement {
    constructor() {
        super();

        linksData.forEach(link =>{
            const linkElement = document.createElement('a');
            const linkIcon = new Sprite(link.icon);
            linkElement.href = link.url;
            linkElement.title = link.name;
            linkElement.className = css.link;
            linkElement.appendChild(linkIcon);
            this.appendChild(linkElement);
        });

    }
}

window.customElements.define('floating-links', FloatingLinks);