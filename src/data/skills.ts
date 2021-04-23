import htmlIcon from '_assets/icons/html.svg?sprite';
import cssIcon from '_assets/icons/css.svg?sprite';
import jsIcon from '_assets/icons/javascript.svg?sprite';
import tsIcon from '_assets/icons/typescript.svg?sprite';
import sassIcon from '_assets/icons/sass.svg?sprite';
import lessIcon from '_assets/icons/less.svg?sprite';
import reactIcon from '_assets/icons/react.svg?sprite';
import reduxIcon from '_assets/icons/redux.svg?sprite';

import nodeLogo from '_assets/icons/node.svg?sprite';
import nextLogo from '_assets/icons/next.svg?sprite';
import webpackLogo from '_assets/icons/webpack.svg?sprite';

import gitIcon from '_assets/icons/git.svg?sprite';
import dockerIcon from '_assets/icons/docker.svg?sprite';
import vscodeIcon from '_assets/icons/vscode.svg?sprite';
import designerIcon from '_assets/icons/designer.svg?sprite';
import photoIcon from '_assets/icons/photo.svg?sprite';
import blenderIcon from '_assets/icons/blender.svg?sprite';


export interface ISkill {
    name: string;
    logo: BrowserSprite;
}


export const webSkillsData: ISkill[] = [
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

export const toolsSkills: ISkill[] = [
    {
        name: 'Git',
        logo: gitIcon,
    },
    {
        name: 'Next',
        logo: nextLogo,
    },
    {
        name: 'Webpack',
        logo: webpackLogo,
    },
    {
        name: 'Node',
        logo: nodeLogo,
    },
    {
        name: 'Docker',
        logo: dockerIcon,
    },
];

export const softwareSkills: ISkill[] = [

    {
        name: 'Visual Studio Code',
        logo: vscodeIcon,
    },
    {
        name: 'Affinity Designer',
        logo: designerIcon,
    },
    {
        name: 'Affinity Photo',
        logo: photoIcon,
    },
    {
        name: 'Blender',
        logo: blenderIcon,
    }
];