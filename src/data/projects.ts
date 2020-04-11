import kyberImage from "../images/projects/kybernauts.png";
import gamedevImage from "../images/projects/gdcs.png";
import brickImage from "../images/projects/brickthecastle.jpg";
import pacImage from "../images/projects/sheriffpac.jpg";
import stamperImage from "../images/projects/stamperman.jpg";


export const projects: Project[] = [
    {
        id: 0,
        name: "Kybernauts",
        desc: "Youtube kanál kde se nám podařilo nasbírat až 22 tisíc odběratelů, poté jsme se přesunuli k Indian Play.",
        image: kyberImage,
        link: "https://www.youtube.com/channel/UCI6Q19WD34-lg0-HWPvkFXg",
        github: "",
        tech: []
    },
    {
        id: 1,
        name: "Gamedev Komunita",
        desc: "Discord server určený pro české a slovenské vývojáře. V současnosti okolo 200 členů.",
        image: gamedevImage,
        link: "https://discord.gg/SEzzru6",
        github: "",
        tech:[]
    },
    {
        id: 2,
        name: "Brick the Castle",
        desc: "Klon Arkanoidu  s trochou úprav vytvořený v Unity během 72 hodin pro GDL GameJam.",
        image: brickImage,
        link: "https://protomace.itch.io/brick-the-castle",
        github: "https://github.com/JosefReichelt/GDLBrickBreakerJam",
        tech: ["Unity", "C#", "Krita"]
    },
    {
        id: 3,
        name: "Sheriff Pac",
        desc: "Klon klasického Pac-Mana ve westernovém duchu vytvořený v Unity během 72 hodin pro GDL GameJam.",
        image: pacImage,
        link: "https://protomace.itch.io/sheriff-pac",
        github: "https://github.com/JosefReichelt/TreasurePac",
        tech: ["Unity", "C#", "Krita"]
    }
];

export interface Project {
    id: number;
    name: string;
    desc: string;
    image: string;
    tech: string[];
    link: string;
    github: string;

}