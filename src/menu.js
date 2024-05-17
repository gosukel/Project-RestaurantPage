export default function makeMenuPage() {
    // get starting div
    const contentDiv = document.querySelector("#content");

    // clear content div
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    // menubox div
    let menuBoxDiv = document.createElement("div");
    menuBoxDiv.setAttribute("id", "menubox");
    contentDiv.appendChild(menuBoxDiv);
    let menuTextDiv = document.createElement("div");
    menuTextDiv.setAttribute("id", "menu-text");
    menuTextDiv.innerText = "Menu";
    menuBoxDiv.appendChild(menuTextDiv);

    // sides div
    let sidesDiv = document.createElement("div");
    sidesDiv.setAttribute("id", "sides");
    menuBoxDiv.appendChild(sidesDiv);
    let sidesText = document.createElement("p");
    sidesText.setAttribute("id", "sides-text");
    sidesText.innerHTML = "- Sides -";
    sidesDiv.appendChild(sidesText);
    // side one
    let sideOneDiv = document.createElement("div");
    sideOneDiv.classList.add("side-item");
    sidesDiv.appendChild(sideOneDiv);
    let sideOneName = document.createElement("p");
    sideOneName.classList.add("item-name");
    sideOneName.innerText = "Side Salad";
    sideOneDiv.appendChild(sideOneName);
    let sideOnePrice = document.createElement("p");
    sideOnePrice.classList.add("item-price");
    sideOnePrice.innerText = "- $4.99 -";
    sideOneDiv.appendChild(sideOnePrice);
    let sideOneDescription = document.createElement("p");
    sideOneDescription.classList.add("item-description");
    sideOneDescription.innerText =
        "(lettuce, tomatoes, onion, cheese, croutons)";
    sideOneDiv.appendChild(sideOneDescription);
    // side two
    let sideTwoDiv = document.createElement("div");
    sideTwoDiv.classList.add("side-item");
    sidesDiv.appendChild(sideTwoDiv);
    let sideTwoName = document.createElement("p");
    sideTwoName.classList.add("item-name");
    sideTwoName.innerText = "Ceasar Side Salad";
    sideTwoDiv.appendChild(sideTwoName);
    let sideTwoPrice = document.createElement("p");
    sideTwoPrice.classList.add("item-price");
    sideTwoPrice.innerText = "- $4.99 -";
    sideTwoDiv.appendChild(sideTwoPrice);
    let sideTwoDescription = document.createElement("p");
    sideTwoDescription.classList.add("item-description");
    sideTwoDescription.innerText = "(lettuce, parmesan cheese, croutons)";
    sideTwoDiv.appendChild(sideTwoDescription);
    // side three
    let sideThreeDiv = document.createElement("div");
    sideThreeDiv.classList.add("side-item");
    sidesDiv.appendChild(sideThreeDiv);
    let sideThreeName = document.createElement("p");
    sideThreeName.classList.add("item-name");
    sideThreeName.innerText = "Cheese Bread";
    sideThreeDiv.appendChild(sideThreeName);
    let sideThreePrice = document.createElement("p");
    sideThreePrice.classList.add("item-price");
    sideThreePrice.innerText = "- $5.99 -";
    sideThreeDiv.appendChild(sideThreePrice);
    let sideThreeDescription = document.createElement("p");
    sideThreeDescription.classList.add("item-description");
    sideThreeDescription.innerText = "(bread, mozzarella, cheddar)";
    sideThreeDiv.appendChild(sideThreeDescription);
    // side four
    let sideFourDiv = document.createElement("div");
    sideFourDiv.classList.add("side-item");
    sidesDiv.appendChild(sideFourDiv);
    let sideFourName = document.createElement("p");
    sideFourName.classList.add("item-name");
    sideFourName.innerText = "Wings";
    sideFourDiv.appendChild(sideFourName);
    let sideFourPrice = document.createElement("p");
    sideFourPrice.classList.add("item-price");
    sideFourPrice.innerText = "- $6.99 -";
    sideFourDiv.appendChild(sideFourPrice);
    let sideFourDescription = document.createElement("p");
    sideFourDescription.classList.add("item-description");
    sideFourDescription.innerText = "(plain)";
    sideFourDiv.appendChild(sideFourDescription);

    // pizzas div
    let pizzasDiv = document.createElement("div");
    pizzasDiv.setAttribute("id", "pizzas");
    menuBoxDiv.appendChild(pizzasDiv);
    let pizzaText = document.createElement("div");
    pizzaText.setAttribute("id", "pizza-text");
    pizzaText.innerText = "- Papas Pizzas -";
    pizzasDiv.appendChild(pizzaText);
    // pizza sizes
    let sizesDiv = document.createElement("div");
    sizesDiv.setAttribute("id", "pizza-sizes");
    pizzasDiv.appendChild(sizesDiv);
    let sizeSm = document.createElement("p");
    sizeSm.innerText = "Small($15.99)";
    let sizeMed = document.createElement("p");
    sizeMed.innerText = "Medium($20.99)";
    let sizeLg = document.createElement("p");
    sizeLg.innerText = "Large($25.99)";
    let sizeXlg = document.createElement("p");
    sizeXlg.innerText = "X-Large($30.99)";
    sizesDiv.append(sizeSm, sizeMed, sizeLg, sizeXlg);
    // pizza one
    let pizzaOne = document.createElement("div");
    pizzaOne.classList.add("pizza-item");
    let pizzaOneName = document.createElement("p");
    pizzaOneName.classList.add("pizza-name");
    pizzaOneName.innerText = "4 Cheese";
    let pizzaOneDescription = document.createElement("p");
    pizzaOneDescription.classList.add("pizza-description");
    pizzaOneDescription.innerText = "- (feta, cheddar, mozzarella, provolone)";
    pizzaOne.append(pizzaOneName, pizzaOneDescription);
    // pizza two
    let pizzaTwo = document.createElement("div");
    pizzaTwo.classList.add("pizza-item");
    let pizzaTwoName = document.createElement("p");
    pizzaTwoName.classList.add("pizza-name");
    pizzaTwoName.innerText = "Deluxe";
    let pizzaTwoDescription = document.createElement("p");
    pizzaTwoDescription.classList.add("pizza-description");
    pizzaTwoDescription.innerText =
        "- (pepperoni, sausage, peppers, mushrooms, onions)";
    pizzaTwo.append(pizzaTwoName, pizzaTwoDescription);
    // pizza three
    let pizzaThree = document.createElement("div");
    pizzaThree.classList.add("pizza-item");
    let pizzaThreeName = document.createElement("p");
    pizzaThreeName.classList.add("pizza-name");
    pizzaThreeName.innerText = "The Phil";
    let pizzaThreeDescription = document.createElement("p");
    pizzaThreeDescription.classList.add("pizza-description");
    pizzaThreeDescription.innerText =
        "- (steak, onions, peppers, mushrooms, provolone)";
    pizzaThree.append(pizzaThreeName, pizzaThreeDescription);
    // pizza four
    let pizzaFour = document.createElement("div");
    pizzaFour.classList.add("pizza-item");
    let pizzaFourName = document.createElement("p");
    pizzaFourName.classList.add("pizza-name");
    pizzaFourName.innerText = "The Buff";
    let pizzaFourDescription = document.createElement("p");
    pizzaFourDescription.classList.add("pizza-description");
    pizzaFourDescription.innerText = "- (chicken, onions, buffalo sauce)";
    pizzaFour.append(pizzaFourName, pizzaFourDescription);
    // pizza five
    let pizzaFive = document.createElement("div");
    pizzaFive.classList.add("pizza-item");
    let pizzaFiveName = document.createElement("p");
    pizzaFiveName.classList.add("pizza-name");
    pizzaFiveName.innerText = "The Aloha";
    let pizzaFiveDescription = document.createElement("p");
    pizzaFiveDescription.classList.add("pizza-description");
    pizzaFiveDescription.innerText = "- (ham, bacon, pineapple, peppers)";
    pizzaFive.append(pizzaFiveName, pizzaFiveDescription);
    // pizza six
    let pizzaSix = document.createElement("div");
    pizzaSix.classList.add("pizza-item");
    let pizzaSixName = document.createElement("p");
    pizzaSixName.classList.add("pizza-name");
    pizzaSixName.innerText = "The Cali";
    let pizzaSixDescription = document.createElement("p");
    pizzaSixDescription.classList.add("pizza-description");
    pizzaSixDescription.innerText = "- (chicken, bacon, ranch, tomatos)";
    pizzaSix.append(pizzaSixName, pizzaSixDescription);
    // append pizzas
    pizzasDiv.append(
        pizzaOne,
        pizzaTwo,
        pizzaThree,
        pizzaFour,
        pizzaFive,
        pizzaSix
    );

    // sweets div
    let sweetsDiv = document.createElement("div");
    sweetsDiv.setAttribute("id", "sweets");
    menuBoxDiv.appendChild(sweetsDiv);
    let sweetsText = document.createElement("div");
    sweetsText.setAttribute("id", "sweets-text");
    sweetsText.innerText = "- Sweets -";
    sweetsDiv.appendChild(sweetsText);
    // sweet one
    let sweetOne = document.createElement("div");
    sweetOne.classList.add("sweet-item");
    sweetsDiv.appendChild(sweetOne);
    let sweetOneName = document.createElement("p");
    sweetOneName.classList.add("sweet-name");
    sweetOneName.innerText = "Brownie";
    let sweetOnePrice = document.createElement("p");
    sweetOnePrice.classList.add("sweet-price");
    sweetOnePrice.innerText = "- $7.99 -";
    let sweetOneDescription = document.createElement("p");
    sweetOneDescription.classList.add("sweet-description");
    sweetOneDescription.innerText = "(fudge, chocolate syrup, vanilla icream)";
    sweetOne.append(sweetOneName, sweetOnePrice, sweetOneDescription);
    // sweet two
    let sweetTwo = document.createElement("div");
    sweetTwo.classList.add("sweet-item");
    sweetsDiv.appendChild(sweetTwo);
    let sweetTwoName = document.createElement("p");
    sweetTwoName.classList.add("sweet-name");
    sweetTwoName.innerText = "Cinnamon Twists";
    let sweetTwoPrice = document.createElement("p");
    sweetTwoPrice.classList.add("sweet-price");
    sweetTwoPrice.innerText = "- $7.99 -";
    let sweetTwoDescription = document.createElement("p");
    sweetTwoDescription.classList.add("sweet-description");
    sweetTwoDescription.innerText = "(bread, cinnamon, sugar, icing)";
    sweetTwo.append(sweetTwoName, sweetTwoPrice, sweetTwoDescription);

    // drinks div
    let drinksDiv = document.createElement("div");
    drinksDiv.setAttribute("id", "drinks");
    menuBoxDiv.appendChild(drinksDiv);
    let drinksText = document.createElement("div");
    drinksText.setAttribute("id", "drinks-text");
    drinksText.innerText = "- Drinks -";
    drinksDiv.appendChild(drinksText);

    // all drinks
    let drinkListDiv = document.createElement("div");
    drinkListDiv.classList.add("drink-list");
    drinksDiv.appendChild(drinkListDiv);
    let drinksList = [
        "Pepsi -",
        "Diet Pepsi -",
        "Sierra Mist -",
        "Dr. Pepper -",
        "Lemonade",
        "Sweet Tea -",
        "Unsweet Tea",
    ];
    for (let drink of drinksList) {
        let tempDrink = document.createElement("p");
        tempDrink.classList.add("drink");
        tempDrink.innerText = drink;
        drinkListDiv.appendChild(tempDrink);
    }
}
