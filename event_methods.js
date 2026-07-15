// ===================================
// EVENT METHODS
// ===================================

const google = document.getElementById("google");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const output = document.getElementById("output");

// -----------------------------------
// preventDefault()
// -----------------------------------

google.addEventListener("click", function (event) {

    event.preventDefault();

    output.innerHTML =
    "<h3>preventDefault()</h3>" +
    "Google link navigation stopped.";

});

// -----------------------------------
// stopPropagation()
// -----------------------------------

parent.addEventListener("click", function () {

    output.innerHTML += "<br>Parent Clicked";

});

child.addEventListener("click", function (event) {

    event.stopPropagation();

    output.innerHTML =
    "<h3>stopPropagation()</h3>" +
    "Only Child Clicked";

});

// -----------------------------------
// stopImmediatePropagation()
// -----------------------------------

child.addEventListener("click", function (event) {

    event.stopImmediatePropagation();

    output.innerHTML +=
    "<br>First Listener Executed";

});

child.addEventListener("click", function () {

    output.innerHTML +=
    "<br>Second Listener";

});