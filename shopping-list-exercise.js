const btn = document.querySelector("#btn");     // pull the button from html
const input = document.querySelector("#item");  //pull the input from html
const ul = document.querySelector("#ul")        //pull the ul from html

btn.addEventListener("click", function() { // Add the function: when I click on the button, I have this:
let list = document.createElement("li"); //Create a list element
list.textContent = input.value; // Read the value from the input provided
ul.appendChild(list);  // Add new list item to the list 
input.value = ""; // Clears the input field after adding the item
});

