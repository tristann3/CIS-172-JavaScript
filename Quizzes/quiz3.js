/**
 * Quiz 3 focuses on Objects
 *
 * @category    Quiz 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.02.20
 * @grade       12 / 10
 * */

// 2 pts
// 1. Define an object called SiteUser.
let SiteUser = {

    Username: "tristann3",
    Email: "tathompson6@hawkmail.hfcc.edu",
    Password: "NiceTryL0Ser", 
    Cart: ["Socks", "Shoes"],
    Cell: "248-248-2482",
    Visits: 26,
    Preferences: null,
    LastSignIn: 2/20/2020,

    init: function(){
    },
    addVisit: function ()
    {
        SiteUser.Visits += 1;
    },
    addItemToCart: function (item)
    {
    SiteUser.Cart.append(item);
}
};
window.onload = SiteUser.init;
SiteUser.addVisit();


// 3 pts
// 2. Add the following properties to the SiteUser object.
//      Username, Email, Password, Cart, Cell, Visits, Preferences, LastSignIn.
//      Feel free to make up the data or values for these properties.



// 2 pts
// 3. Add a function to the SiteUser object called addVisit.
//      This function should increase the Visits property by 1.


// 3 pts
// 4. Call the addVisit method of the SiteUser object.


// 2 ex pt
// B. Add a function to the SiteUser object called addItemToCart.
//      This function should take an argument called item.
//      This function should then add that item to the cart array.
