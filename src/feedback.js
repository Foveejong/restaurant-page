import "./styles.css";
import pd1 from "../img/panda1.jpg";
import pd2 from "../img/panda2.jpg";
import pd3 from "../img/panda3.jpg";

class Feedback {
    constructor(account, title, comment, icon) {
        this.account = account;
        this.title = title;
        this.comment = comment;
        this.icon = icon;
    }

    createFeedback() {
        const feedback = document.createElement('div');
        const img = document.createElement('img');
        const accountInfo = document.createElement('div');
        const account = document.createElement('p');
        const title = document.createElement('p');
        const comment = document.createElement('p');

        feedback.classList.add('feedback');
        accountInfo.classList.add('account-info');
        account.classList.add('account');

        // link image
        img.src = this.icon;

        account.textContent = this.account;
        title.textContent = this.title;
        comment.textContent = this.comment;

        accountInfo.appendChild(account);
        accountInfo.appendChild(title);

        feedback.appendChild(img);
        feedback.appendChild(accountInfo);
        feedback.appendChild(comment);

        return feedback
    }
}

function createFeedbackPage() {
    const mainPageContainer = document.createElement('div');
    const feedbackWrapper = document.createElement('div');
    const feedbackContainer = document.createElement('div');

    mainPageContainer.classList.add("main-page-container");
    feedbackWrapper.classList.add("feedback-wrapper");
    feedbackContainer.classList.add("feedback-container");
    
    const pooh = new Feedback("@pooh", "Honey Bear", "-- Hearty Meals!", pd1);
    const tigger = new Feedback("@tigger", "Friendly Friend", "-- Fantastic Food!", pd2);
    const panpan = new Feedback("@panpan", "Curtsy Panda", "-- Simply Delicious!", pd3);

    feedbackContainer.appendChild(pooh.createFeedback());
    feedbackContainer.appendChild(tigger.createFeedback());
    feedbackContainer.appendChild(panpan.createFeedback());
    feedbackWrapper.appendChild(feedbackContainer);
    mainPageContainer.appendChild(feedbackWrapper);

    return mainPageContainer
}


export { createFeedbackPage }