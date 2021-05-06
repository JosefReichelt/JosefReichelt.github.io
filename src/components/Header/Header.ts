import css from './Header.scss';
import photoImg from '_assets/photo.jpg';
import { calculateAge } from 'src/utils/ageCalc';

class Header extends HTMLElement {
    constructor() {
        super();
        const titleSection = document.createElement('section');
        const nameSection = document.createElement('div');
        const photo = document.createElement('img');
        const name = document.createElement('h1');
        const motto = document.createElement('h2');
        const info = document.createElement('p');

        titleSection.className = css.titleSection;
        nameSection.className = css.nameSection;
        photo.className = css.photo;
        photo.alt = 'Profilovka Josefa Reichelta';
        name.className = css.name;
        motto.className = css.motto;
        info.className = css.info;

        name.innerText = 'Josef Reichelt';
        motto.innerText = 'web master, designer, game developer';
        // eslint-disable-next-line function-paren-newline, max-len
        info.innerText = `Ahoj, já jsem Pepa, je mi ${calculateAge(new Date(1992, 7, 27))} let a jsem nadšenec do vývoje webovek, software a her. Specializuji na vývoj front-end aplikací a to primárně za použití Reactu, Typescriptu a Less.`;
        photo.src = photoImg;

        nameSection.appendChild(name);
        nameSection.appendChild(motto);
        titleSection.appendChild(photo);
        titleSection.appendChild(nameSection);
        this.appendChild(titleSection);
        this.appendChild(info);
    }
}

window.customElements.define('jr-header', Header);