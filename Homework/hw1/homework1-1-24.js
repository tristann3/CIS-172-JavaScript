/*
Homework 1
1/24/2020
Tristan Thompson
v1.0.0
Grade: 10 / 10
*/

let myName = "Tristan";
let myMajor = "Associates in Applied Science in Computer Science";
let funFact = "I have the same name as a professional athlete.";

console.log(myName);
console.log(myMajor);
console.log(funFact);

//global variable 'var email'
var email = "tathompson6@hawkmail.hfcc.edu";
console.log(email);

//uses const COURSE_NAME to finish console log
const COURSE_NAME = "CIS-172";
console.log("I am using JS in " + COURSE_NAME);

//loops ten times
for(x=0;x<10;x++)
    console.log("This is for loop # " + (x+1));

//loops ten more times
while(x<20) {
    console.log("This is while loop # " + (x - 9));
    x++;
}

//will compare string type my name to provided string
if(myName === "Mr. Banks")
    console.log("Welcome back Professor!");
else
    console.log("Welcome back " +myName + " - " + myMajor);


