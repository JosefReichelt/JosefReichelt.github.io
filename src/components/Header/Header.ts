import css from './Header.scss';
import photoImg from '_assets/photo.jpg';

class Header extends HTMLElement {
    constructor() {
        super();
        const titleSection = document.createElement('section');
        const nameSection = document.createElement('div');
        const photo = document.createElement('img');
        const name = document.createElement('h1');
        const motto = document.createElement('h3');
        const info = document.createElement('p');

        titleSection.className = css.titleSection;
        nameSection.className = css.nameSection;
        photo.className = css.photo;
        name.className = css.name;
        motto.className = css.motto;
        info.className = css.info;

        name.innerText = 'Josef Reichelt';
        motto.innerText = 'web master, designer, game developer';
        // eslint-disable-next-line max-len
        info.innerText = 'Ahoj, já jsem Pepa, je mi 28 let a jsem nadšenec do vývoje webovek, software a her. Specializuji na vývoj front-end aplikací a to primárně za použití Reactu, Typescriptu a Less. Zabývám se ale i jinými technologiemi jako je Rust.';
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