import "./styles.css";
import fbsvg from "../svg/facebook-svgrepo-com.svg";
import instasvg from "../svg/instagram-svgrepo-com.svg";
import twittersvg from "../svg/twitter-svgrepo-com.svg";

function createMainPage() {
    const mainPageContainer = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    const bodyContainer = document.createElement('div');
    const introduction = document.createElement('div');
    const h2intro = document.createElement('h2');
    const openingHours = document.createElement('div');
    const openingHoursTitle = document.createElement('h1');
    const list = document.createElement('ul');
    const mon = document.createElement('li');
    const tues = document.createElement('li');
    const wed = document.createElement('li');
    const thurs = document.createElement('li');
    const fri = document.createElement('li');
    const sat = document.createElement('li');
    const sun = document.createElement('li');

    mainPageContainer.classList.add('main-page-container');
    titleContainer.classList.add('title-container');
    title.classList.add('title');
    bodyContainer.classList.add('body-container');
    introduction.classList.add('introduction');
    openingHours.classList.add('opening-hours');
    openingHoursTitle.classList.add('title');
    list.classList.add('list');
    mon.classList.add('item')
    tues.classList.add('item')
    wed.classList.add('item')
    thurs.classList.add('item')
    fri.classList.add('item')
    sat.classList.add('item')
    sun.classList.add('item')

    title.textContent = "Welcome to the Breakfast Bar";
    h2intro.textContent = "Opened in 1955. Only the best breakfasts are served here.";
    openingHoursTitle.textContent = "Opening Hours:";
    mon.textContent = "Monday: Closed";
    tues.textContent = "Tuesday: 0900-1200";
    wed.textContent = "Wednesday: 0900-1200";
    thurs.textContent = "Thursday: 0900-1200";
    fri.textContent = "Friday: 0900-1200";
    sat.textContent = "Saturday: 0900-1200";
    sun.textContent = "Sunday: 0900-1200";

    list.appendChild(mon);
    list.appendChild(tues);
    list.appendChild(wed);
    list.appendChild(thurs);
    list.appendChild(fri);
    list.appendChild(sat);
    list.appendChild(sun);
    openingHours.appendChild(openingHoursTitle);
    openingHours.appendChild(list);

    introduction.appendChild(h2intro);
    bodyContainer.appendChild(introduction);
    bodyContainer.appendChild(openingHours);

    titleContainer.appendChild(title);
    mainPageContainer.appendChild(titleContainer);
    mainPageContainer.appendChild(bodyContainer);

    return mainPageContainer
}

function createFooter() {
    const footer = document.createElement('div');
    const h1 = document.createElement('h1');
    const signs = document.createElement('div');
    const fb = document.createElement('img');
    const instagram = document.createElement('img');
    const twitter = document.createElement('img');

    fb.src = fbsvg;
    instagram.src = instasvg;
    twitter.src = twittersvg;
    fb.alt = "Facebook svg";
    instagram.alt = "Instagram svg";
    twitter.alt = "Twitter svg";

    footer.classList.add('footer');
    signs.classList.add('signs-container');
    fb.classList.add('svg');
    instagram.classList.add('svg');
    twitter.classList.add('svg');

    h1.textContent = "Find us!";

    signs.appendChild(fb);
    signs.appendChild(instagram);
    signs.appendChild(twitter);
    footer.appendChild(h1);
    footer.appendChild(signs);
    
    return footer
}

function createHomePage() {
    const element = createMainPage();
    const footer = createFooter();
    element.appendChild(footer);
    return element
}

export { createHomePage }