export default function makeSweets(div, sweets) {
    let sweetsDiv = div;
    let sweetsText = document.createElement("div");
    sweetsText.setAttribute("id", "sweets-text");
    sweetsText.innerText = "- Sweets -";
    sweetsDiv.appendChild(sweetsText);

    for (let sweet of sweets) {
        let tempSweet = document.createElement("div");
        tempSweet.classList.add("sweet-item");
        sweetsDiv.appendChild(tempSweet);
        let sweetName = document.createElement("p");
        sweetName.classList.add("sweet-name");
        sweetName.innerText = sweet.name;
        let sweetPrice = document.createElement("p");
        sweetPrice.classList.add("sweet-price");
        sweetPrice.innerText = sweet.price;
        let sweetDescription = document.createElement("p");
        sweetDescription.classList.add("sweet-description");
        sweetDescription.innerText = sweet.description;
        tempSweet.append(sweetName, sweetPrice, sweetDescription);
    }
}
