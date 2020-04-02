let ErrorHandler = {

    init: function( )
    {
        var myBtn = document.getElementById("myButton");
        myBtn.addEventListener("click", ErrorHandler.checkDate);
        var myDiv = document.getElementById("myDiv");
    },

    checkDate: function()
    {
        try{
            let todayDate = new Date();
            let happyMessage;
            var errorMessage = '<span style = "color:red;">Sorry, an error occurred!</span>';

            if((todayDate.getDay()==2) || (todayDate.getDay()==4))
            {
                happyMessage = "Welcome to class!"
            }
            else
                happyMessage = "Enjoy your day off!";

            if(todayDate.getMinutes()%2 == 0)
            {
                myDiv.append(happyMessage);
            }
            else
                throw Error;
        } catch(err){
            console.log(err);
            myDiv.append(errorMessage);
        }
    },
};
window.onload = ErrorHandler.init;