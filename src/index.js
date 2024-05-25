import "./styles.css";
import { createHomePage } from "./home.js";

const content = document.querySelector("#content");
const homepage = createHomePage();
content.appendChild(homepage);