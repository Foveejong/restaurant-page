import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenu } from "./menu.js";
import { createFeedbackPage } from "./feedback.js";

function restaurantPage() {
    const content = document.querySelector("#content");
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const feedback = document.querySelector("#feedback");

    const resetPage = (element) => {
        element.textContent = "";
    }

    const resetButton = () => {
        home.classList.remove("selected");
        menu.classList.remove("selected");
        feedback.classList.remove("selected");
    }

    const displayHome = () => {
        resetPage(content);
        const homepage = createHomePage();
        content.appendChild(homepage);
    }

    const displayMenu = () => {
        resetPage(content);
        const menu = createMenu();
        content.appendChild(menu);
    }

    const displayFeedback = () => {
        resetPage(content);
        const feedback = createFeedbackPage();
        content.appendChild(feedback);
    }

    home.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayHome();
    });
    
    menu.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayMenu();
    });

    feedback.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayFeedback();
    });

    displayHome();
}

restaurantPage();
