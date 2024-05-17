import "./normalize.css";
import "./style.css";
import makeHomePage from "./home";
import makeAboutPage from "./about";
import makeMenuPage from "./menu";

makeHomePage();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    makeHomePage();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    makeMenuPage();
});

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
    makeAboutPage();
});
