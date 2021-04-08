import "./index.css";
import { render, html } from "lit-html";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

const app: HTMLElement = document.body;

render(html` ${Header} ${Info} ${Projects} ${Footer}`, app);
