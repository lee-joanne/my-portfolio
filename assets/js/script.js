let bioBtn = document.getElementById("biography-btn");
let hobbyBtn = document.getElementById("myhobbies-btn")
let biography = document.getElementById("biography-container");
let myHobbies = document.getElementById("myhobbies-container");
bioBtn.addEventListener("click", displayBiography);
hobbyBtn.addEventListener("click", displayMyHobbies);

function displayBiography() {
    biography.classList.remove("hide");
    myHobbies.classList.add("hide");
    bioBtn.classList.add("aboutme-activelink");
    bioBtn.classList.remove("aboutme-nonactivelink");
    hobbyBtn.classList.add("aboutme-nonactivelink")
}

function displayMyHobbies() {
    biography.classList.add("hide");
    myHobbies.classList.remove("hide");
    hobbyBtn.classList.add("aboutme-activelink");
    hobbyBtn.classList.remove("aboutme-nonactivelink");
    bioBtn.classList.add("aboutme-nonactivelink")
}

