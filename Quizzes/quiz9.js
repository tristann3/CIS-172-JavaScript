/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <tathompson6@hawkmail.hfcc.edu>
 * @date        2020.04.30
 * @grade
 */


// 4 pts
// 1. Create a JS object called cartData and save 3 properties in it.
//    The properties should be name, price, and quantity; feel free to give them any values.
let CartData = {
    name: "Toilet Paper",
    quantity: 20,
    price: 4.59,
}

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
//              https://example.com/api/v2/cart
    let carDatabaseUrl = "https://example.com/api/v2/cart";

// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object
$.ajax({method: "POST", url: carDatabaseUrl, data: CartData, complete: CartData.getResponse});

// getResponse: function (response) {
//     console.log("Response:", response.responseText);
// }

// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.
var responseObj = JSON.parse(responseString);

// 2 pts
// E. Name a http status codes for success and one for error.
//success: 200
//error: 400
