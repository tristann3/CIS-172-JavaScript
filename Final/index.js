/**
 * CIS-172 Final
 *
 * This file should allow users to choose and preview a car color.
 * It should also use local storage to remember the car options they selected.
 *
 * @category    Final
 * @author      YOURNAME
 * @date        2020.05.12
 * @grade
 *
 **/

var pagejs = {

    carcolor : false,
    metric: {"data":"All sorts of metrics are in here."},

    init: function ()
    {
        console.log("Page loaded!");

        // LOCAL STORAGE STUFF
        pagejs.carcolor = localStorage.getItem('car-color');

        if(!pagejs.carcolor)
        {
            localStorage.setItem( "car-color", "white" );
            pagejs.carcolor = 'white';
        }

        // Perform Actual Visible Update
        pagejs.updateDisplay( pagejs.carcolor );

        // COLOR PICKER LISTENER
        let selectBox = document.getElementById('carcolor');
        selectBox.addEventListener('change', pagejs.updateColor);

        // BUY BUTTON LISTENER
        let btn = document.getElementById('buybtn');
        btn.addEventListener('click', pagejs.onButtonClick);
    },
    updateDisplay : function()
    {
        let carimage = document.getElementById('carimage');
        carimage.src = pagejs.carcolor + '.png';

        let selectBox = document.getElementById('carcolor');
        selectBox.value = pagejs.carcolor;
    },
    updateColor : function(event)
    {
        try {
            // Save The Value
            let sb = event.target;
            pagejs.carcolor = sb.value;

            switch(pagejs.carcolor) { // switch statements checking dropdown
                case "white":
                    console.log("white");
                    break;
                case "red":
                    console.log("red");
                    break;
                case "blue":
                    console.log("blue");
                    break;
                default:
                    throw new Error("Not a valid choice");
            }
            localStorage.setItem("car-color", pagejs.carcolor);

            // Perform Actual Visible Update
            pagejs.updateDisplay(pagejs.carcolor);
        } catch (e)
        {
            console.error(e);
        }
    },
    onButtonClick: function()
    {
        console.log("BUY BUTTON!");
        $.ajax( {method: "POST", url: "https://nottesla.com/api/v2/page/metrics"} ); //ajax post request to fake api
        localStorage.setItem("metrics", metrics);//saves metrics into local storage

    }
};


window.onload = pagejs.init;
