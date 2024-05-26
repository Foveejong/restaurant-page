import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenu } from "./menu.js";
import { createFeedbackPage } from "./feedback.js";

const content = document.querySelector("#content");
// const homepage = createHomePage();
// content.appendChild(homepage);

// const menu = createMenu();
// content.appendChild(menu);

const feedback = createFeedbackPage();
content.appendChild(feedback);
