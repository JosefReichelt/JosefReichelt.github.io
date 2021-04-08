import { SVGTemplateResult } from "lit-html";
import { emailLogo, githubLogo, artstationLogo, sketchfabLogo, linkedInLogo } from "../components/logo/logo";

export const socialLinks: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:pepareichelt@gmail.com",
        alt: "My email link",
        icon: emailLogo
    },
    {
        name: "Github",
        href: "https://github.com/JosefReichelt",
        alt: "My email link",
        icon: githubLogo
    }, {
        name: "Artstation",
        href: "https://www.artstation.com/josefreichelt",
        alt: "My graphics work on artstation",
        icon: artstationLogo
    }
    , {
        name: "Sketchfab",
        href: "https://sketchfab.com/JosefReichelt",
        alt: "My 3D modeling work on sketchfab",
        icon: sketchfabLogo
    }, {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/josefreichelt/",
        alt: "My LinkedIn profile",
        icon: linkedInLogo
    }
];






export interface SocialLink {
    name: string;
    href: string;
    alt: string;
    icon: SVGTemplateResult;
}