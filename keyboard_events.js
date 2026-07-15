// =====================================
// KEYBOARD EVENTS
// =====================================

const input = document.getElementById("input");
const output = document.getElementById("output");

// Key Down
input.addEventListener("keydown", function (event) {

    output.innerHTML =
    "<h3>Key Down Event</h3>" +
    "Key : " + event.key +
    "<br>Code : " + event.code;

});

// Key Up
input.addEventListener("keyup", function (event) {

    output.innerHTML =
    "<h3>Key Up Event</h3>" +
    "You Released : " + event.key;

});

// Key Press (Legacy)
input.addEventListener("keypress", function (event) {

    output.innerHTML =
    "<h3>Key Press Event</h3>" +
    "Pressed : " + event.key;

});

// Ctrl Key
input.addEventListener("keydown", function (event) {

    if(event.ctrlKey){

        output.innerHTML =
        "<h3>Ctrl Key Pressed</h3>";

    }

});

// Shift Key
input.addEventListener("keydown", function (event) {

    if(event.shiftKey){

        output.innerHTML =
        "<h3>Shift Key Pressed</h3>";

    }

});

// Alt Key
input.addEventListener("keydown", function (event) {

    if(event.altKey){

        output.innerHTML =
        "<h3>Alt Key Pressed</h3>";

    }

});

// Meta Key
input.addEventListener("keydown", function (event) {

    if(event.metaKey){

        output.innerHTML =
        "<h3>Meta Key Pressed</h3>";

    }

});