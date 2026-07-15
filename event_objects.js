// ====================================
// EVENT OBJECT
// ====================================

const button = document.getElementById("btn1");
const input = document.getElementById("input");
const output = document.getElementById("output");

// Mouse Event Object
button.addEventListener("click", function (event) {

    output.innerHTML =
        "<h3>Mouse Event</h3>" +
        "Type : " + event.type +
        "<br>Target : " + event.target.tagName +
        "<br>Current Target : " + event.currentTarget.tagName +
        "<br>X : " + event.clientX +
        "<br>Y : " + event.clientY +
        "<br>Time : " + Math.floor(event.timeStamp);

});

// Keyboard Event Object
input.addEventListener("keydown", function (event) {

    output.innerHTML =
        "<h3>Keyboard Event</h3>" +
        "Key : " + event.key +
        "<br>Code : " + event.code +
        "<br>Type : " + event.type;

});