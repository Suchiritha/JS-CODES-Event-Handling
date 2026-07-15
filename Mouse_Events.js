// ===================================
// MOUSE EVENTS
// ===================================

const box=document.getElementById("box");

// Click

box.addEventListener("click",function(){

    console.log("Click Event");

});

// Double Click

box.addEventListener("dblclick",function(){

    console.log("Double Click");

});

// Mouse Down

box.addEventListener("mousedown",function(){

    console.log("Mouse Down");

});

// Mouse Up

box.addEventListener("mouseup",function(){

    console.log("Mouse Up");

});

// Mouse Move

box.addEventListener("mousemove",function(event){

    console.log("X =",event.clientX);

    console.log("Y =",event.clientY);

});

// Mouse Over

box.addEventListener("mouseover",function(){

    console.log("Mouse Over");

});

// Mouse Out

box.addEventListener("mouseout",function(){

    console.log("Mouse Out");

});

// Mouse Enter

box.addEventListener("mouseenter",function(){

    console.log("Mouse Enter");

});

// Mouse Leave

box.addEventListener("mouseleave",function(){

    console.log("Mouse Leave");

});

// Right Click

box.addEventListener("contextmenu",function(event){

    event.preventDefault();

    console.log("Right Click");

});

// Mouse Wheel

box.addEventListener("wheel",function(){

    console.log("Mouse Wheel");

});