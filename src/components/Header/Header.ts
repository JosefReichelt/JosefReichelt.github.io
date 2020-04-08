import { TemplateResult, html } from "lit-html";
import style from "./Header.css";
import { motto } from "../../data/texts";
import { brandLogo } from "../logo/logo";

export const Header: TemplateResult = html`
    <header class="${style.header}">
        <div>
            ${brandLogo}
            <span class="${style.title}">
                <h1>Josef Reichelt</h1>
                <h3>${motto}</h3>
            </span>
        </div>
    </header>
`;