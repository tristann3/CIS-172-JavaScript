var num1 = null;
var num2 = null;
var operator = null;
var answer = null;

//choose number function
function chooseNum(number) {
    if (num1 == null) {
        num1 = number;
    } else
        num2 = number;
}
//opChoice represents what the user chooses 1-add 2-subtract 3-multiply 4-divide
function chooseOperator(opChoice) {
        operator = opChoice;
}
function equals(num1, num2, operator) {
    if(num1!=null && num2!=null && num3!=null){
        switch(operator) {
            case 1:
                answer = num1 + num2;
                updateDisplay();
                break;
            case 2:
                answer = num1 - num2;
                updateDisplay();
                break;
            case 3:
                answer = num1 * num2;
                updateDisplay();
                break;
            case 4:
                answer = num1 / num2;
                updateDisplay();
                break;
        }
    }
    else
        console.log("you aint got nuff info for me to calculate your problems....you must have lots of those.......")
}
function updateDisplay()
{
    let answerLbl = document.getElementById("answerLabel");
    answerLbl.innerHTML = answer;
}