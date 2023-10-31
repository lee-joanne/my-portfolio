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

$(document).ready(function() {
    $(window).scroll(function() {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-dark').addClass('bg-opacity-50')
            $('.nav-link').addClass('text-white')
            $('#toggle-btn').addClass('nav-scroll')
        // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-dark').addClass('bg-transparent');
            $('.nav-link').removeClass('text-white').addClass('text-dark')
            $('#toggle-btn').removeClass('nav-scroll')
        }
    });
});