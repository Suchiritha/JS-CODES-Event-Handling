// ===================================
// DOM EVENT HANDLERS
// ===================================

// Selecting Elements

const btn1 = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");

const btn3 = document.getElementById("btn3");

const btn4 = document.getElementById("btn4");

// -----------------------------------
// HTML Attribute Event Handler
// -----------------------------------

function htmlHandler(){

    console.log("HTML Attribute Event Handler");

}

// -----------------------------------
// DOM Property Event Handler
// -----------------------------------

btn1.onclick=function(){

    console.log("DOM Property Event");

};

// -----------------------------------
// addEventListener()
// -----------------------------------

btn2.addEventListener("click",function(){

    console.log("addEventListener");

});

// -----------------------------------
// Multiple Event Listeners
// -----------------------------------

btn3.addEventListener("click",function(){

    console.log("First Listener");

});

btn3.addEventListener("click",function(){

    console.log("Second Listener");

});

btn3.addEventListener("mouseover",function(){

    console.log("Mouse Over");

});

// -----------------------------------
// removeEventListener()
// -----------------------------------

function greeting(){

    console.log("Hello JavaScript");

}

btn4.addEventListener("click",greeting);

// Uncomment

// btn4.removeEventListener("click",greeting);