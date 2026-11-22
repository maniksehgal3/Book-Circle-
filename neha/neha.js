
// Select the countdown elements
let countdown = document.getElementById("countdown");
let message = document.getElementById("countdownMessage");

// Check if the countdown exists on this page
if (countdown && message) {

    // Set the event date
    let eventDate = new Date(2026, 10, 25);
    let today = new Date();

    // Calculate the remaining days
    let difference = eventDate - today;
    let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Display the countdown
    if (daysLeft > 0) {
        countdown.innerText = daysLeft + " days left!";
    } else if (daysLeft === 0) {
        countdown.innerText = "The event is today!";
    } else {
        countdown.innerText = "The event has passed.";
        message.innerText = "Stay tuned for our next event!";
    }
}
