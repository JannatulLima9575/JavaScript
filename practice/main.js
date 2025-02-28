// Select elements
let title = document.getElementById("title");  
let items = document.querySelectorAll(".item");
let button = document.getElementById("changeText");

// Modify elements
title.textContent = "Welcome to DOM Manipulation!";  // Changes the title

// Change color of all items
items.forEach(item => {
    item.style.color = "red";
});

// Button event to change text when clicked
button.addEventListener("click", function() {
    title.textContent = "You clicked the button!";
});
