// ====================================
// FORM EVENTS
// ====================================

const form = document.getElementById("form");
const username = document.getElementById("username");
const output = document.getElementById("output");

// Input Event
username.addEventListener("input", function () {

    output.textContent = "Typing: " + username.value;

});

// Change Event
username.addEventListener("change", function () {

    output.textContent = "Changed Value: " + username.value;

});

// Focus Event
username.addEventListener("focus", function () {

    output.textContent = "Input Field Focused";

});

// Blur Event
username.addEventListener("blur", function () {

    output.textContent = "Input Field Lost Focus";

});

// Select Event
username.addEventListener("select", function () {

    output.textContent = "Text Selected";

});

// Invalid Event
username.addEventListener("invalid", function () {

    output.textContent = "Invalid Input";

});

// Submit Event
form.addEventListener("submit", function (event) {

    event.preventDefault();

    output.textContent = "Form Submitted Successfully";

});

// Reset Event
form.addEventListener("reset", function () {

    output.textContent = "Form Reset";

});