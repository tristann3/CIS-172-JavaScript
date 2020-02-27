/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <tathompson@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 2 pts
// 1. Use the JS to get my footer into a variable called foot.
let foot = document.getElementById('myFoot');


// 3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.
foot.addEventListener('click', anyMethodName());

// 2 pts
// 3. Store my title element in a variable called myTitle.
 let myTitle = document.title;

// 3 pts
// 4. Use JS to change my Title and Footer to day "This Class rocks!"
    document.getElementById("myFoot").innerText = "This Class rocks!";
    document.title = "This Class rocks!";