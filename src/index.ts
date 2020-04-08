import "./index.css";
import { render, html } from "lit-html";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Projects } from "./components/Projects/Projects";

const app: HTMLElement = document.body;

render(html` ${Header} ${Info} ${Projects} `, app);

// Header(app);
// Info(app);
