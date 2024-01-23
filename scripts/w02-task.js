/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Maria Jose Arevalo";
const currentYear = "2024";
const profilePicture = "images/IMG_9179.jpg"



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.querySelector("#food")
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
yearElement.innerHTML =  currentYear;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}.She is a student at BYU-Idaho.`)


/* Step 5 - Array */
let favfood = ["Pasta ", " sushi", " pizza", " barbecue", " lettuce."];

foodElement.innerHTML = favfood;
let newfood = " burritos";
favfood.push(newfood);
foodElement.innerHTML += `<br>${favfood}`;

let newfood2 = [" sushi", " pizza", " barbecue", " lettuce."]
favfood.push(newfood2);
foodElement.innerHTML += `<br>${newfood2}`;

let newfood3 = [" sushi", " pizza", " barbecue."]
favfood.push(newfood3);
foodElement.innerHTML += `<br>${newfood3}`;

