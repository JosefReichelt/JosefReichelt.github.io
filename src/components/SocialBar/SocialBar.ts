import { TemplateResult, html, svg } from "lit-html";
import style from "./SocialBar.css";
import email from "../../images/emailMono.svg";
import { emailLogo, githubLogo, artstationLogo, sketchfabLogo } from "../logo/logo";

export const SocialBar: TemplateResult = html`
    <div class="${style.socialBar}">
        <div>
            ${emailLogo}
        </div>
        <div>
            ${githubLogo}
        </div>
        <div>
            ${artstationLogo}
        </div>
        <div>
            ${sketchfabLogo}
        </div>
    </div>
`;