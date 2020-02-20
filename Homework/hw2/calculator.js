/**
 * Grade    : 7 / 10
 * Notes    : Answer did not rendeer; see diff or notes in updateDisplay function.
 */

// global scoped so that equals function can be exectued in html
var num1 = null;
var num2 = null;
var operator = null;
var answer = null;

//fires when a number button is clicked
function chooseNum(number) {
    if (num1 == null) {
        num1 = number;
    } else
        num2 = number;
}
//fires when an operator button is clicked
//opChoice represents what the user chooses 1-add 2-subtract 3-multiply 4-divide
function chooseOperator(opChoice) {
        operator = opChoice;
}
//fired when equals is clicked, checks for 3 params, will not execute if any of the three are absent
function equals(num1, num2, operator) {
    if(num1!=null && num2!=null && num3!=null){
        switch(operator) {
            case 1:
                answer = num1 + num2;
                //updateDisplay();
                break;
            case 2:
                answer = num1 - num2;
                //updateDisplay();
                break;
            case 3:
                answer = num1 * num2;
                //updateDisplay();
                break;
            case 4:
                answer = num1 / num2;
                //updateDisplay();
                break;
        }

        updateDisplay(answer);
    }
    else
        alert("Not enough variables");
        //console.log("you aint got nuff info for me to calculate your problems....you must have lots of those.......")
}
function updateDisplay(answer)
{
    let answerLbl = document.getElementById("answerLabel");
    // It looks like you grabbed the element here, but did not do the update.
    // answerLbl.innerHTML = "Answer: " + answer;
}
