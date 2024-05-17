export default function makeSides(div, sides) {
    let sidesDiv = div;
    let sidesText = document.createElement("p");
    sidesText.setAttribute("id", "sides-text");
    sidesText.innerHTML = "- Sides -";
    sidesDiv.appendChild(sidesText);

    for (let side of sides) {
        let tempSideDiv = document.createElement("div");
        tempSideDiv.classList.add("side-item");
        sidesDiv.appendChild(tempSideDiv);
        let sideName = document.createElement("p");
        sideName.classList.add("item-name");
        sideName.innerText = side.name;
        tempSideDiv.appendChild(sideName);
        let sidePrice = document.createElement("p");
        sidePrice.classList.add("item-price");
        sidePrice.innerText = side.price;
        tempSideDiv.appendChild(sidePrice);
        let sideDescription = document.createElement("p");
        sideDescription.classList.add("item-description");
        sideDescription.innerText = side.description;
        tempSideDiv.appendChild(sideDescription);
    }
}
