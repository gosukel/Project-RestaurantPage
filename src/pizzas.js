export default function makePizzas(div, prices, pizzas) {
    let pizzasDiv = div;

    let pizzaText = document.createElement("div");
    pizzaText.setAttribute("id", "pizza-text");
    pizzaText.innerText = "- Papas Pizzas -";
    pizzasDiv.appendChild(pizzaText);

    // prices
    let sizesDiv = document.createElement("div");
    sizesDiv.setAttribute("id", "pizza-sizes");
    pizzasDiv.appendChild(sizesDiv);
    for (let price of prices) {
        let tempPrice = document.createElement("p");
        tempPrice.innerText = price;
        sizesDiv.appendChild(tempPrice);
    }

    // pizzas
    for (let pizza of pizzas) {
        let tempPizza = document.createElement("div");
        tempPizza.classList.add("pizza-item");
        let pizzaName = document.createElement("p");
        pizzaName.classList.add("pizza-name");
        pizzaName.innerText = pizza.name;
        let pizzaDescription = document.createElement("p");
        pizzaDescription.classList.add("pizza-description");
        pizzaDescription.innerText = pizza.description;
        tempPizza.append(pizzaName, pizzaDescription);
        pizzasDiv.appendChild(tempPizza);
    }
}
