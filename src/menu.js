import "./styles.css";

class Fooditem {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    createFoodItem() {
        const item = document.createElement('li');
        const topDiv = document.createElement('div');
        const nameP = document.createElement('p');
        const priceP = document.createElement('p');
        const descriptionP = document.createElement('p');

        item.classList.add("food-item");
        topDiv.classList.add('top');
        nameP.classList.add('name');
        priceP.classList.add('price');
        descriptionP.classList.add('description');
        
        nameP.textContent = this.name;
        priceP.textContent = this.price;
        descriptionP.textContent = this.description;
        
        topDiv.appendChild(nameP);
        topDiv.appendChild(priceP);
        
        item.appendChild(topDiv);
        item.appendChild(descriptionP);

        return item
    }
}

function createMenu() {
    const mainPageContainer = document.createElement('div');
    const starters = document.createElement('ul');
    const mains = document.createElement('ul');
    const coffee = document.createElement('ul');

    // add classes to all elements
    mainPageContainer.classList.add("main-page-container");
    starters.classList.add("starters");
    mains.classList.add("mains");
    coffee.classList.add("coffee");

    // create food-item
    const fries = new Fooditem("Truffle Fries", 12, "Potato Fries, White Truffle Oil, Grated Parmesan");
    const salad = new Fooditem("Bar's Salad", 12, "Mesclun Avocado, Cherry Tomato, Pumpkin seeds, Baby Corn, Sesame Dressing");
    const grain = new Fooditem("Salmon Grain Bowl", 15, "Quinoa, Miso Salmon, Furikake, Hanjuku Egg, Roasted Sesame Dressing");
    const breakfast = new Fooditem("Bar's Breakfast", 20, "Light Buttered Sourdough, Tater Tots, Bacon Steak, Pork Sausages, Scrambled Eggs");
    const rigatoni = new Fooditem("Spicy Tomato Crab Rigatoni", 20, "Rigatoni, Blue Swimmer Crab, Tomato Sauce, White Wine, Garlic, Parmesan");
    const sandwich = new Fooditem("Grilled Cheese Sandwich", 15, "Buttered Sourdough, Cheddar, Bacon Steak, Mustard, Caramelised Onions");
    const affogato = new Fooditem("Bar's Affogato", 10, "Espresso, Chocolate Sauce and Cookkies & Cream Ice Cream");
    const coldbrew = new Fooditem("Specialty Cold Brew", 8, "Seasonal");

    // append food-items to ul
    starters.appendChild(fries.createFoodItem());
    starters.appendChild(salad.createFoodItem());
    starters.appendChild(grain.createFoodItem());

    mains.appendChild(breakfast.createFoodItem());
    mains.appendChild(rigatoni.createFoodItem());
    mains.appendChild(sandwich.createFoodItem());

    coffee.appendChild(affogato.createFoodItem());
    coffee.appendChild(coldbrew.createFoodItem());

    // append ul to mainpagecontainer
    mainPageContainer.appendChild(starters);
    mainPageContainer.appendChild(mains);
    mainPageContainer.appendChild(coffee);

    return mainPageContainer
}

export { createMenu }