/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cote MacKay",
    photo: "images/IMG_9179.jpg",
    favoriteFood: ["Pasta","Sushi","Pizza","Burritos"],
    hobbies: ["photography", "drawing", "singing", "editing", "voleiball", "cooking"],
    placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: "Santiago, Chile",
        length: "20 years"
    },
    {
        place: "IV and V region of Chile",
        length: "4 months",
    },
    {
        place: "Orem, Utah",
        length: "1 year"
    },
    {
        place: "Salt Lake City, Utah",
        length: "3 years"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let bullets =  document.createElement("li");
    bullets.textContent = food;
    document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let bullets = document.createElement("li");
    bullets.textContent = hobby;
    document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
})