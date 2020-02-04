/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Tristan Thompson <tathompson6@hawkmail.hfcc.edu>
 * @date        01.30.2020
 * @link
 * @grade       12 / 10
 */

// 2 pts
// 1. Define a constant named favBook that holds the name of your favorite book.
//      Also define a standard variables called favInt that contains your favorite int.
const favBook = "The Alchemist";
let favInt = 3;


// 3 pts
// 2. Write an if statement that meets the following conditions.
//      If favInt is greater than 42, console log the word BIGGER.
//      If favInt is less than 42, console log the word SMALLER.
//      If favInt is equal to 42, console log the word EQUAL.
if ( favInt > 42 )
{
    console.log("BIGGER");
}
else if ( favInt < 42 )
{
    console.log("SMALLER")
}
else if ( favInt === 42 )
{
    console.log("EQUAL");
}


// 2 pts
// 3. Write a for loop that iterates 7 times. Log the name of your book in each iteration.

for(let i = 0; i<7;i++)
{
    console.log(favBook);
}

// 3 pts
// 4. Write a while loop that iterates until favInt is less than or equal to -42.
//      Inside the loop, write an if that will send a console error if favInt is 0.
//      The console error should read "ZERO DETECTED!"

while( favInt >= -42 )
{
    if ( favInt === 0 )
        console.error("ZERO DETECTED");
    favInt--;
}

// 2 ex pts
// 5. Write a switch statement for you favBook that meets the following bookname conditions.
//      "The Matrix" should console log "Excellent Movie!"
//      "Tears Of Steel" should log "I love open source!"
//      "Fight Club" should log "Excellent Movie!"
//      "Citizen Kane" should log "All Time Best Movie!"
//      "Star Wars" should log "He didn't say Luke I am your father!"

switch(favBook)
{
    case("The Matrix"):
        console.log("Excellent Movie!");
        break;
    case("Tears Of Steel"):
        console.log("I love an open source!");
        break;
    case("Fight Club"):
        console.log("Excellent Movie!");
        break;
    case("Citizen Kane"):
        console.log("All Time BEst Movie");
        break;
    case("Star Wars"):
        console.log("He didnt say Luke I am your father!");
        break;
    default:
        console.log("Your books sound like they were more popular movies!");

}