/**
 * Homework 4
 * @grade		0 / 10
 * @notes       Uh oh, this looks like the wrong homework.
 */

let PageManager =
    {
            init : function()
            {
                let btn1 = document.getElementById("btn1");
                let btn2 = document.getElementById("btn2");
                let btn3 = document.getElementById("btn3");
                let txt1 = document.getElementById("txtInput1");
                let txt2 = document.getElementById("txtInput2");
                let myDiv = document.getElementById("divElement");
                let dropdown = document.getElementById("colors");
                btn1.addEventListener("click", PageManager.changeH1);
                btn2.addEventListener("click", PageManager.appendDiv);
                btn3.addEventListener("click", PageManager.logObject);
                dropdown.addEventListener("change", PageManager.changeColor);
            },
            changeH1 : function(txt1)
            {
                    console.log("Loaded");
                    var textBox = document.getElementById("txtInput1");
                    var newText = textBox.value
                    var myH1 = document.getElementById("myH1");
                    myH1.innerHTML = newText;
            },
            appendDiv : function()
            {
                    console.log("Loaded Append function");
                    var textBox = document.getElementById("txtInput2");
                    var newText = textBox.value;
                    document.getElementById("divElement").append(newText);
                    // myDiv.appendChild(textBox.innerText);
            },
            logObject : function()
            {
                    console.log(PageManager);
            },
            changeColor : function()
            {
                    console.log("LOOOOOOAD");

                    var dropdown = document.getElementById("colors");
                    var newColor = colors.value;
                    console.log("newColor: " + newColor);
                    var bodyElement = document.body;
                    if (newColor == "white")
                    {
                                 bodyElement.style.backgroundColor = "white";
                    }
                    else if (newColor == "black")
                    {
                                 bodyElement.style.backgroundColor = "black";
                    }
                    else if (newColor == "red")
                    {
                                bodyElement.style.backgroundColor = "red";
                    }
                    else if (newColor == "blue")
                    {
                                bodyElement.style.backgroundColor = "blue";
                    }
                    else
                    {
                                bodyElement.style.backgroundColor = "green";
                    }
            }
    };
window.onload = PageManager.init;