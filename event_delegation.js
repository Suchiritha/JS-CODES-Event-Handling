// ===================================
// EVENT DELEGATION
// ===================================

const list = document.getElementById("list");
const output = document.getElementById("output");

// Existing Elements

list.addEventListener("click", function (event) {

    output.innerHTML =
    "<h3>Clicked:</h3> " +
    event.target.textContent;

});

// ------------------------------
// Dynamic Element
// ------------------------------

const newItem = document.createElement("li");

newItem.textContent = "Grapes";

list.appendChild(newItem);