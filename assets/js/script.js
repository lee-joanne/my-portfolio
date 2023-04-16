document.getElementById("biography-btn").addEventListener("click", displayBiography);
document.getElementById("myhobbies-btn").addEventListener("click", displayMyHobbies);
document.getElementById("funfacts-btn").addEventListener("click", displayFunFacts);
let biography = document.getElementById("biography-container")
let myHobbies = document.getElementById("myhobbies-container")
let funFacts = document.getElementById("funfacts-container")



function displayBiography() {
    console.log("clicked bio!")
    biography.classList.remove("hide");
    myHobbies.classList.add("hide");
    funFacts.classList.add("hide");
}

function displayMyHobbies() {
    console.log("clicked hobbies!")
    biography.classList.add("hide");
    myHobbies.classList.remove("hide");
    funFacts.classList.add("hide");
}

function displayFunFacts() {
    console.log("clicked fun!")
    biography.classList.add("hide");
    myHobbies.classList.add("hide");
    funFacts.classList.remove("hide");
}