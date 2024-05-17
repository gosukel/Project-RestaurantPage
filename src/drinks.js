export default function makeDrinks(div, drinks) {
    let drinksDiv = div;
    let drinksText = document.createElement("div");
    drinksText.setAttribute("id", "drinks-text");
    drinksText.innerText = "- Drinks -";
    drinksDiv.appendChild(drinksText);

    // all drinks
    let drinkListDiv = document.createElement("div");
    drinkListDiv.classList.add("drink-list");
    drinksDiv.appendChild(drinkListDiv);
    for (let drink of drinks) {
        let tempDrink = document.createElement("p");
        tempDrink.classList.add("drink");
        tempDrink.innerText = drink;
        drinkListDiv.appendChild(tempDrink);
    }
}
