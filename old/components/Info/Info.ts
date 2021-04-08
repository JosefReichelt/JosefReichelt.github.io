import { TemplateResult, html } from "lit-html";
import style from "./Info.css";
import { info, currentInterests } from "../../data/texts";
import foto from "../../images/foto.jpg";
import { SocialBar } from "../SocialBar/SocialBar";

export const Info: TemplateResult = html`
    <div class="${style.info}">
        <div class=${style.imageSection}>
            <img src=${foto} />
            ${SocialBar}
        </div>
        <div class=${style.textSection}>
            <span>
                ${info}
            </span>
            <span>
                ${currentInterests}
            </span>
        </div>
    </div>
`;