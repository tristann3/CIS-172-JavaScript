/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.13
 * @link
    */

// 3 pts
// 1. Define a function that take two arguments, you can choose the name.
//      The function should them multiply them together and return the result
function multiply(num1, num2){
    return num1 * num2;
}

// 2 pts
// 2. Create a button with an id of multiply, with text that says "Multiple 4 and 7"
//      Add an onclick event to this button that calls the function above, passing in 4 and 7.
//
//go to quiz2.html

// 2 pts
// 3. Write a function that displays a welcome message to the user in the dev console or anywhere on the page.
function displayWelcomeMessage () {
    console.log("Welcome to the page.");
}

// 3 pts
// 4. Create a button with an id of welcome, with text that says "Display Welcome"
//      Add a JS created listener click event to this button that calls the welcome function above.

let myButton = document.getElementById("welcome");
myButton.addEventListener("click", displayWelcomeMessage);

// 1 ex pt
// 5. Create an on hover event for one of the buttons above.
//      This event can fire any function you would like.
myButton.onmouseover(displayWelcomeMessage);
