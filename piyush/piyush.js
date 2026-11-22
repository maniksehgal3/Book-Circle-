
// Select the contact form
let contactForm = document.getElementById("contactForm");

// Select the message area
let formMessage = document.getElementById("formMessage");

// Check if the contact form exists
if (contactForm) {

    // Run when the form is submitted
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.innerText = "Thank you! Your message has been submitted.";

        contactForm.reset();

    });

}
