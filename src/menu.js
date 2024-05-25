import "./styles.css";

function createMenu() {
    const mainPageContainer = document.createElement('div');
    const starters = document.createElement('ul');
    const mains = document.createElement('ul');
    const coffee = document.createElement('ul');
    const fries = document.createElement('li');
    const salad = document.createElement('li');
    const grainBowl = document.createElement('li');
    const bf = document.createElement('li');
    const rigatoni = document.createElement('li');
    const sandwich = document.createElement('li');
    const affogato = document.createElement('li');
    const coldBrew = document.createElement('li');
    
    const friestop = document.createElement('div');
    const friesname = document.createElement('p');
    const friesprice = document.createElement('p');
    const friesdescription = document.createElement('p');
    
    const saladtop = document.createElement('div');
    const saladname = document.createElement('p');
    const saladprice = document.createElement('p');
    const saladdescription = document.createElement('p');
    
    const grainBowltop = document.createElement('div');
    const grainBowlname = document.createElement('p');
    const grainBowlprice = document.createElement('p');
    const grainBowldescription = document.createElement('p');
    
    const bftop = document.createElement('div');
    const bfname = document.createElement('p');
    const bfprice = document.createElement('p');
    const bfdescription = document.createElement('p');
    
    const rigatonitop = document.createElement('div');
    const rigatoniname = document.createElement('p');
    const rigatoniprice = document.createElement('p');
    const rigatonidescription = document.createElement('p');
    
    const sandwichtop = document.createElement('div');
    const sandwichname = document.createElement('p');
    const sandwichprice = document.createElement('p');
    const sandwichdescription = document.createElement('p');
    
    const affogatotop = document.createElement('div');
    const affogatoname = document.createElement('p');
    const affogatoprice = document.createElement('p');
    const affogatodescription = document.createElement('p');
    
    const coldBrewtop = document.createElement('div');
    const coldBrewname = document.createElement('p');
    const coldBrewprice = document.createElement('p');
    const coldBrewdescription = document.createElement('p');

    // add classes to all elements
    mainPageContainer.classList.add("main-page-container");

    starters.classList.add("starters");
    mains.classList.add("mains");
    coffee.classList.add("coffee");

    coffee.classList.add("food-item");
    fries.classList.add("food-item");
    salad.classList.add("food-item");
    grainBowl.classList.add("food-item");
    bf.classList.add("food-item");
    rigatoni.classList.add("food-item");
    sandwich.classList.add("food-item");
    affogato.classList.add("food-item");
    coldBrew.classList.add("food-item");

    friestop.classList.add('top');
    saladtop.classList.add('top');
    grainBowltop.classList.add('top');
    bftop.classList.add('top');
    rigatonitop.classList.add('top');
    sandwichtop.classList.add('top');
    affogatotop.classList.add('top');
    coldBrewtop.classList.add('top');

    friesname.classList.add('name');
    saladname.classList.add('name');
    grainBowlname.classList.add('name');
    bfname.classList.add('name');
    rigatoniname.classList.add('name');
    sandwichname.classList.add('name');
    affogatoname.classList.add('name');
    coldBrewname.classList.add('name');

    friesprice.classList.add('price');
    saladprice.classList.add('price');
    grainBowlprice.classList.add('price');
    bfprice.classList.add('price');
    rigatoniprice.classList.add('price');
    sandwichprice.classList.add('price');
    affogatoprice.classList.add('price');
    coldBrewprice.classList.add('price');

    friesdescription.classList.add('description');
    saladdescription.classList.add('description');
    grainBowldescription.classList.add('description');
    bfdescription.classList.add('description');
    rigatonidescription.classList.add('description');
    sandwichdescription.classList.add('description');
    affogatodescription.classList.add('description');
    coldBrewdescription.classList.add('description');

    // add textContent
    friesname.textContent = "Truffle Fries";
    friesprice.textContent = "12";
    friesdescription.textContent = "Potato Fries, White Truffle Oil, Grated Parmesan";
    
    saladname.textContent = "Bar's Salad";
    saladprice.textContent = "12";
    saladdescription.textContent = "Mesclun Avocado, Cherry Tomato, Pumpkin seeds, Baby Corn, Sesame Dressing";
    
    grainBowlname.textContent = "Salmon Grain Bowl";
    grainBowlprice.textContent = "15";
    grainBowldescription.textContent = "Quinoa, Miso Salmon, Furikake, Hanjuku Egg, Roasted Sesame Dressing";
    
    bfname.textContent = "Bar's Breakfast";
    bfprice.textContent = "20";
    bfdescription.textContent = "Light Buttered Sourdough, Tater Tots, Bacon Steak, Pork Sausages, Scrambled Eggs";
    
    rigatoniname.textContent = "Spicy Tomato Crab Rigatoni";
    rigatoniprice.textContent = "20";
    rigatonidescription.textContent = "Rigatoni, Blue Swimmer Crab, Tomato Sauce, White Wine, Garlic, Parmesan";
    
    sandwichname.textContent = "Grilled Cheese Sandwich";
    sandwichprice.textContent = "15";
    sandwichdescription.textContent = "Buttered Sourdough, Cheddar, Bacon Steak, Mustard, Caramelised Onions";
    
    affogatoname.textContent = "Bar's Affogato";
    affogatoprice.textContent = "10";
    affogatodescription.textContent = "Espresso, Chocolate Sauce and Cookkies & Cream Ice Cream";
    
    coldBrewname.textContent = "Specialty Cold Brew";
    coldBrewprice.textContent = "8";
    coldBrewdescription.textContent = "Seasonal";

    // create food-item
    friestop.appendChild(friesname);
    friestop.appendChild(friesprice);
    fries.appendChild(friestop);
    fries.appendChild(friesdescription);

    saladtop.appendChild(saladname);
    saladtop.appendChild(saladprice);
    salad.appendChild(saladtop);
    salad.appendChild(saladdescription);

    grainBowltop.appendChild(grainBowlname);
    grainBowltop.appendChild(grainBowlprice);
    grainBowl.appendChild(grainBowltop);
    grainBowl.appendChild(grainBowldescription);

    bftop.appendChild(bfname);
    bftop.appendChild(bfprice);
    bf.appendChild(bftop);
    bf.appendChild(bfdescription);

    rigatonitop.appendChild(rigatoniname);
    rigatonitop.appendChild(rigatoniprice);
    rigatoni.appendChild(rigatonitop);
    rigatoni.appendChild(rigatonidescription);

    sandwichtop.appendChild(sandwichname);
    sandwichtop.appendChild(sandwichprice);
    sandwich.appendChild(sandwichtop);
    sandwich.appendChild(sandwichdescription);

    affogatotop.appendChild(affogatoname);
    affogatotop.appendChild(affogatoprice);
    affogato.appendChild(affogatotop);
    affogato.appendChild(affogatodescription);

    coldBrewtop.appendChild(coldBrewname);
    coldBrewtop.appendChild(coldBrewprice);
    coldBrew.appendChild(coldBrewtop);
    coldBrew.appendChild(coldBrewdescription);

    // append food-items to ul
    starters.appendChild(fries);
    starters.appendChild(salad);
    starters.appendChild(grainBowl);

    mains.appendChild(bf);
    mains.appendChild(rigatoni);
    mains.appendChild(sandwich);

    coffee.appendChild(affogato);
    coffee.appendChild(coldBrew);

    // append ul to mainpagecontainer
    mainPageContainer.appendChild(starters);
    mainPageContainer.appendChild(mains);
    mainPageContainer.appendChild(coffee);

    return mainPageContainer
}

export { createMenu }