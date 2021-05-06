import pexesoImage from '_assets/projects/pexeso.jpg';
import brickImage from '_assets/projects/brickthecastle.jpg';
import pacImage from '_assets/projects/sheriffpac.jpg';


export const projects: IProject[] = [
    {
        name: 'Pexeso',
        desc: 'Jednoduchá pexeso hra vytvořená v Reactu.',
        image: pexesoImage,
        link: 'https://josefreichelt.eu/pexeso',
        tech: [ 'React', 'Typescript' ]
    },
    {
        name: 'Brick the Castle',
        desc: 'Klon Arkanoidu  s trochou úprav vytvořený v Unity během 72 hodin pro GDL GameJam.',
        image: brickImage,
        link: 'https://josefreichelt.itch.io/brick-the-castle',
        tech: [
            'Unity', 'C#', 'Krita'
        ]
    },
    {
        name: 'Sheriff Pac',
        desc: 'Klon klasického Pac-Mana ve westernovém duchu vytvořený v Unity během 72 hodin pro GDL GameJam.',
        image: pacImage,
        link: 'https://josefreichelt.itch.io/sheriff-pac',
        tech: [
            'Unity', 'C#', 'Krita'
        ]
    }
];

export interface IProject {
    name: string;
    desc: string;
    image: string;
    tech: string[];
    link: string;
}