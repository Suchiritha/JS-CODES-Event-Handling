// ====================================
// WINDOW EVENTS
// ====================================

const output = document.getElementById("output");

// Page Loaded
window.addEventListener("load", function () {

    output.textContent = "Window Loaded";

});

// HTML Loaded
document.addEventListener("DOMContentLoaded", function () {

    output.textContent = "DOM Fully Loaded";

});

// Window Resize
window.addEventListener("resize", function () {

    output.textContent =
    "Window Size: " +
    window.innerWidth +
    " x " +
    window.innerHeight;

});

// Scroll Event
window.addEventListener("scroll", function () {

    output.textContent =
    "Scroll Position: " +
    window.scrollY;

});

// Before Unload
window.addEventListener("beforeunload", function (event) {

    event.preventDefault();

});

// Internet Connected
window.addEventListener("online", function () {

    output.textContent = "Internet Connected";

});

// Internet Disconnected
window.addEventListener("offline", function () {

    output.textContent = "Internet Disconnected";

});