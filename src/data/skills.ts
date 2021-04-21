import htmlIcon from '_assets/icons/html.svg?sprite';
import cssIcon from '_assets/icons/css.svg?sprite';
import jsIcon from '_assets/icons/javascript.svg?sprite';
import tsIcon from '_assets/icons/typescript.svg?sprite';
import sassIcon from '_assets/icons/sass.svg?sprite';
import lessIcon from '_assets/icons/less.svg?sprite';
import reactIcon from '_assets/icons/react.svg?sprite';
import reduxIcon from '_assets/icons/redux.svg?sprite';

export interface ISkill {
    name: string;
    logo: BrowserSprite;
}


export const webSkillsData = [
    {
        name: 'HTML',
        logo: htmlIcon
    },
    {
        name: 'CSS',
        logo: cssIcon
    },
    {
        name: 'Javascript',
        logo: jsIcon
    },
    {
        name: 'Typescript',
        logo: tsIcon
    },
    {
        name: 'Sass',
        logo: sassIcon
    },
    {
        name: 'Less',
        logo: lessIcon
    },
    {
        name: 'React',
        logo: reactIcon
    },
    {
        name: 'Redux',
        logo: reduxIcon
    },
];