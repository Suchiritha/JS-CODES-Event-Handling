// ===================================
// EVENT FLOW
// ===================================

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const output = document.getElementById("output");

// ------------------------------
// Event Bubbling (Default)
// ------------------------------

parent.addEventListener("click", function () {

    output.innerHTML +=
    "<br>Parent Bubbling";

});

child.addEventListener("click", function () {

    output.innerHTML +=
    "<br>Child Bubbling";

});

// ------------------------------
// Event Capturing
// ------------------------------

parent.addEventListener("click", function () {

    output.innerHTML +=
    "<br>Parent Capturing";

}, true);

child.addEventListener("click", function () {

    output.innerHTML +=
    "<br>Child Capturing";

}, true);