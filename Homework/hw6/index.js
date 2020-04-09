let PageHandler = {

    pageDiv: null,

    init: function( )
    {
        try{
            console.log("The Page Has Loaded!");
            if (jQuery)
                console.log("jQuery Has Loaded!");
            else
                console.log("jQuery failure.");
        } catch(err){

        }
    },
};

window.onload = PageHandler.init;