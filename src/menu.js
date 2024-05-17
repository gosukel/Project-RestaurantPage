import makeSides from "./sides";
import makePizzas from "./pizzas";
import makeSweets from "./sweets";
import makeDrinks from "./drinks";

export default function makeMenuPage() {
    const allSides = [
        {
            name: "Side Salad",
            price: "- $4.99 -",
            description: "(lettuce, tomatoes, onion, cheese, croutons)",
        },
        {
            name: "Ceasar Side Salad",
            price: "- $4.99 -",
            description: "(lettuce, parmesan cheese, croutons)",
        },
        {
            name: "Cheese Bread",
            price: "- $5.99 -",
            description: "(bread, mozzarella, cheddar)",
        },
        {
            name: "Wings",
            price: "- $6.99 -",
            description: "(plain)",
        },
    ];

    const pizzaPrices = [
        "Small($15.99)",
        "Medium($20.99)",
        "Large($25.99)",
        "X-Large($30.99)",
    ];

    const allPizzas = [
        {
            name: "4 Cheese",
            description: "- (feta, cheddar, mozzarella, provolone)",
        },
        {
            name: "Deluxe",
            description: "- (pepperoni, sausage, peppers, mushrooms, onions)",
        },
        {
            name: "The Phil",
            description: "- (steak, onions, peppers, mushrooms, provolone)",
        },
        {
            name: "The Buff",
            description: "- (chicken, onions, buffalo sauce)",
        },
        {
            name: "The Aloha",
            description: "- (ham, bacon, pineapple, peppers)",
        },
        {
            name: "The Cali",
            description: "- (chicken, bacon, ranch, tomatos)",
        },
    ];

    const allSweets = [
        {
            name: "Brownie",
            price: "- $7.99 -",
            description: "(fudge, chocolate syrup, vanilla icream)",
        },
        {
            name: "Cinnamon Twists",
            price: "- $7.99 -",
            description: "(bread, cinnamon, sugar, icing)",
        },
    ];

    const allDrinks = [
        "Pepsi -",
        "Diet Pepsi -",
        "Sierra Mist -",
        "Dr. Pepper -",
        "Lemonade",
        "Sweet Tea -",
        "Unsweet Tea",
    ];

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
    makeSides(sidesDiv, allSides);

    // pizzas div
    let pizzasDiv = document.createElement("div");
    pizzasDiv.setAttribute("id", "pizzas");
    menuBoxDiv.appendChild(pizzasDiv);
    makePizzas(pizzasDiv, pizzaPrices, allPizzas);

    // sweets div
    let sweetsDiv = document.createElement("div");
    sweetsDiv.setAttribute("id", "sweets");
    menuBoxDiv.appendChild(sweetsDiv);
    makeSweets(sweetsDiv, allSweets);

    // drinks div
    let drinksDiv = document.createElement("div");
    drinksDiv.setAttribute("id", "drinks");
    menuBoxDiv.appendChild(drinksDiv);
    makeDrinks(drinksDiv, allDrinks);
}
