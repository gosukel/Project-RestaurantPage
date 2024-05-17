export default function makeAboutPage() {
    // get starting div
    const contentDiv = document.querySelector("#content");

    // clear content div
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }

    // make hero div
    let heroDiv = document.createElement("div");
    heroDiv.setAttribute("id", "hero");
    let logoImg = document.createElement("img");
    logoImg.setAttribute("src", "../src/logo.png");
    logoImg.setAttribute("id", "logo");
    heroDiv.appendChild(logoImg);
    contentDiv.appendChild(heroDiv);

    // lorem div one
    let loremOne = document.createElement("div");
    loremOne.classList.add("lorem");
    loremOne.innerText =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Libero molestiae laudantium excepturi quibusdam dolor quos eius tempore! Natus, hic. Harum dolores officia dicta iste odio adipisci, aperiam eveniet ipsam molestias!";
    contentDiv.appendChild(loremOne);

    // lorem div two
    let loremTwo = document.createElement("div");
    loremTwo.classList.add("lorem");
    loremTwo.innerText =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Officia adipisci aliquam iure totam eius iusto, incidunt velit quos aliquid voluptas non et at labore beatae, illum iste expedita atque exercitationem!";
    contentDiv.appendChild(loremTwo);

    // lorem div three
    let loremThree = document.createElement("div");
    loremThree.classList.add("lorem");
    loremThree.innerText =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Impedit velit ad nobis pariatur consectetur facere dolores repellendus magni, nesciunt placeat in officiis natus suscipit perferendis recusandae? Enim consectetur et blanditiis?";
    contentDiv.appendChild(loremThree);
}
