
import css from './Contact.scss';
import linkedInLogo from '_assets/icons/linkedin-square.svg?sprite';
import { Sprite } from '../Sprite/Sprite';

class Contact extends HTMLElement {
    constructor() {
        super();
        this.className = 'sectionBlock';
        const title = document.createElement('h2');
        title.innerText = 'kontakt';
        title.className = 'sectionTitle';

        const text1 = document.createElement('p');
        text1.className = css.text;
        text1.innerText = 'Nejlepší způsob jak mě kontaktovat je přes následující email:';

        const text2 = document.createElement('p');
        text2.className = css.text;
        text2.innerText = 'Případně mě můžete kontaktovat na LinkedIn';

        const link = document.createElement('a');
        link.className = css.link;
        link.innerText = 'pepareichelt@gmail.com';
        link.href = 'mailto:pepareichelt@gmail.com';

        const linkedInLink = document.createElement('a');
        linkedInLink.href = 'https://www.linkedin.com/in/josefreichelt';
        const linkedin = new Sprite(
            linkedInLogo, 6, 6
        );
        linkedInLink.appendChild(linkedin);

        this.appendChild(title);
        this.appendChild(text1);
        this.appendChild(link);
        this.appendChild(text2);
        this.appendChild(linkedInLink);
    }
}

window.customElements.define('jr-contact', Contact);