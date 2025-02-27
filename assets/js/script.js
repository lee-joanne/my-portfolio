$(document).ready(function() {
    $(window).scroll(function() {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-dark').addClass('bg-opacity-50')
            $('.nav-link').addClass('text-white')
            $('#toggle-btn').addClass('nav-scroll').removeClass('nav-color')
        // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-dark').addClass('bg-transparent');
            $('.nav-link').removeClass('text-white').addClass('text-dark')
            $('#toggle-btn').removeClass('nav-scroll').addClass('nav-color')
        }
    });
});