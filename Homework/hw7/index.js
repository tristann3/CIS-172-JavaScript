/**
 * Homework 7
 * @grade       10 / 10
 * @notes
 */

localStorage.setItem("background-color", "white");
let PageManager =
    {
            init : function()
            {
                    let btn1 = document.getElementById("btn1");
                    let btn2 = document.getElementById("btn2");
                    let btn3 = document.getElementById("btn3");
                    let btnClicker = document.getElementById("clicker");
                    let txt1 = document.getElementById("txtInput1");
                    let txt2 = document.getElementById("txtInput2");
                    let myDiv = document.getElementById("divElement");
                    let dropdown = document.getElementById("colors");
                    btn1.addEventListener("click", PageManager.changeH1);
                    btn2.addEventListener("click", PageManager.appendDiv);
                    btn3.addEventListener("click", PageManager.logObject);
                    btnClicker.addEventListener("click", PageManager.OnClick);

                    dropdown.addEventListener("change", PageManager.changeColor);

                    //local storage pull background color
                    document.body.backgroundColor = localStorage.getItem("background-color");
                    //create cookies
                    document.cookie = "name=Tristan;"
                    document.cookie = "class=CIS-172;"
                    document.cookie = "email=tathompson6@hawkmail.hfcc.edu;"
                    document.cookie = "date=" + Date();
                    document.cookie = "movie=Big Daddy";
            },
            changeH1 : function(txt1)
            {
                    console.log("Loaded");
                    var textBox = document.getElementById("txtInput1");
                    var newText = textBox.value;
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
                    console.log("change color loaded");

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
                    localStorage.setItem("background-color", newColor);
            },
        OnClick : function()
        {
            let myClicks = localStorage.getItem('clicks');
            if(myClicks == "" || (!myClicks) || Number.isInteger(myClicks))
                localStorage.setItem("clicks", 1);
            else
            {
                myClicks++;
                localStorage.setItem("clicks", myClicks);
            }
            let myDiv = document.getElementById("numOfClicks");
            let newText = localStorage.getItem('clicks');
            myDiv.innerText= "Clicks: " + newText;
        }

    };
window.onload = PageManager.init;