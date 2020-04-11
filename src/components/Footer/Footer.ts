import { TemplateResult, html } from "lit-html";
import style from "./Footer.css";
import { SocialBar } from "../SocialBar/SocialBar";


export const Footer: TemplateResult = html`
    <footer class="${style.footer}">
        ${SocialBar}
    </footer>
`;