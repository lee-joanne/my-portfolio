function sendMail(contactForm) {
    emailjs.send("service_y10gf5i", "template_xjhz7bt", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.content.value,
    })
    .then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("ERROR", error)
        }
    ); return false;
}