import { TemplateResult, html } from "lit-html";
import style from "./SocialBar.css";
import { socialLinks } from "../../data/socialLinks";

export const SocialBar: TemplateResult = html`
    <div class="${style.socialBar}">
        ${socialLinks.map(link => html`
            <a href="${link.href}" alt=${link.alt} target="_blank">
                ${link.icon}
            </a>
        `)}
    </div>
`;