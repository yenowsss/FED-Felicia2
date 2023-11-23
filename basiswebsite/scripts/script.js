// JavaScript Document
console.log("hi");

// open menu button
var menuButton = document.querySelector("header nav:nth-child(1) ul+ul ");
var navigatie = document.querySelector("header nav+nav")
menuButton.onclick = toonMenu;

function toonMenu() {
navigatie.classList.add("toonMenu")
console.log("menu werkt")
}


// sluit menu

var sluitButton = document.querySelector("header nav+nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    navigatie.classList.remove("toonMenu");
    console.log("het menu is gesloten");
}