export default function makeHomePage() {
    // get starting div
    const contentDiv = document.querySelector("#content");

    // clear content div
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    // make hero element
    let heroDiv = document.createElement("div");
    heroDiv.setAttribute("id", "hero");
    let logoImg = document.createElement("img");
    logoImg.setAttribute("src", "../src/logo.png");
    logoImg.setAttribute("id", "logo");
    heroDiv.appendChild(logoImg);
    contentDiv.appendChild(heroDiv);

    // make ingrediants div
    let ingrediantsDiv = document.createElement("div");
    ingrediantsDiv.setAttribute("id", "ingrediants");
    contentDiv.appendChild(ingrediantsDiv);
    let doughImgDiv = document.createElement("div");
    doughImgDiv.setAttribute("id", "dough-pic");
    ingrediantsDiv.appendChild(doughImgDiv);
    let doughImg = document.createElement("img");
    doughImg.setAttribute("src", "../src/dough.png");
    doughImgDiv.appendChild(doughImg);
    let ingrediantsTextDiv = document.createElement("div");
    ingrediantsTextDiv.setAttribute("id", "ingrediants-text");
    ingrediantsDiv.appendChild(ingrediantsTextDiv);
    let ingrediantsText = document.createElement("p");
    ingrediantsText.innerText =
        "Here at Pizza by Papa we only use the freshest dough specialists with our super secret ingrediant - love!";
    ingrediantsTextDiv.appendChild(ingrediantsText);

    // make customers div
    let customersDiv = document.createElement("div");
    customersDiv.setAttribute("id", "customers");
    contentDiv.appendChild(customersDiv);
    let customersTextDiv = document.createElement("div");
    customersTextDiv.setAttribute("id", "customers-text");
    customersDiv.appendChild(customersTextDiv);
    let customersText = document.createElement("p");
    customersText.innerText =
        "Our customers always leave satisfied by every bite.  That's the Papa Guarantuee!";
    customersTextDiv.appendChild(customersText);
    let customersImgDiv = document.createElement("div");
    customersImgDiv.setAttribute("id", "customers-pic");
    customersDiv.appendChild(customersImgDiv);
    let customersImg = document.createElement("img");
    customersImg.setAttribute("src", "../src/customers.png");
    customersImgDiv.appendChild(customersImg);
}
