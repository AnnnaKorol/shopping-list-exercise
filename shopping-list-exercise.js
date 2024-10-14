const btn = document.querySelector("#btn");     // pull the button from html
const input = document.querySelector("#item");  //pull the input from html
const ul = document.querySelector("#ul")        //pull the ul from html

btn.addEventListener("click", function() { // Add the function: when I click on the button, I have this:
    if(input.value.trim() === "") {
        alert ("Please enter an item.");
        return; 
    }
let list = document.createElement("li"); //Create a list element
const deleteBtn = document.createElement("button"); // create "delete" button
const spanElem = document.createElement("span"); // create "span" 
// Add text content  "Delete" to the button 
deleteBtn.style.color = "black";


spanElem.textContent = input.value;  // Span is the value from the input provided
deleteBtn.textContent = "Delete";

list.appendChild(spanElem); // Add "span"  to the list element
ul.appendChild(list);  // Add new list element to the list 
list.appendChild(deleteBtn); // Add "delete" button to the list element

input.value = ""; // Clears the input field after adding the item

deleteBtn.addEventListener("click", () => {
    ul.removeChild(list);
});

input.focus();

});





