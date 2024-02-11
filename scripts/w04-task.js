/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cote MacKay",
    photo: {
        src: "images/IMG_9179.jpg",
        alt: "Picture of Cote MacKay"
    },
    favoriteFoods: ['Pasta','Sushi','Pizza','Burritos'],
    hobbies: ["photography", "draw", "singing", "editing", "voleiball", "cooking",],
    placeLived: []
};
myProfile.placesLived.push(
    {
        place: "Cerro Placeres, Valparaiso",
        lenght: "3 meses"
    }
);

/* Populate Profile Object with placesLive objects */

placeLived.push(["Santiago","Valparaiso", "Ovalle","Taylorsville", "Salt Lake City"]);

myProfile.placesLived.push(newplace);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContext = myProfile.name;
let nameHeading = document.createElement('h1');
nameHeading.textContent = myProfile.name;
document.getElementById('name').appendChild(nameHeading);

/* Photo with attributes */
let photoElement = document.createElement('img');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt',myProfile.name);
document.getElementById('photo').appendChild(photoElement);

/* Favorite Foods List*/
let favoritefoodsList = document.createElement('ul');
myProfile.favoriteFood.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    favoriteFoodList.appendChild(listItem);
    document.querySelector("#favorite-food").appendChild(li);

});


/* Hobbies List */


/* Places Lived DataList */


