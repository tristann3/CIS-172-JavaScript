 /*
Tristan Thompson
2/4/2020
*/

//Wrong Answer Function
function wrongAnswer() {
    console.log("WRONG");
}
//Right Answer Function
function correctAnswer() {
    console.log("RIGHT");
}
//Event Setup
 let button2 = document.getElementById("q1a2");
 let button3 = document.getElementById("q1a3");
 let button4 = document.getElementById("q1a4");

 button2.addEventListener(("click", correctAnswer()));
 button3.addEventListener(("click", wrongAnswer()));
 button4.addEventListener(("click", wrongAnswer()));