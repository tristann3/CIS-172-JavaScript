let PageHandler = {

    pageDiv: null,

    init: function( )
    {
        try{
            console.log("The Page Has Loaded!");
            if (jQuery)
                console.log("jQuery Has Loaded!");
        } catch(err){
            console.log(err);
        }
        //Select without jQuery
        let div = document.getElementById("JohnCena");
        // console.log("myDiv: ", div);

        //Select with jQuery
        PageHandler.pageDiv = $( '#JohnCena' );
        PageHandler.pageDiv.hide();

        let btnShowDiv = $('#btnShow');
        btnShowDiv.click( PageHandler.showDiv );

        let btnRedirect = $('#btnjQuery');
        btnRedirect.click( PageHandler.redirect );
    },
    showDiv : function ( event )
    {
        PageHandler.pageDiv.show();
    },
    redirect : function (event )
    {
        window.open('https://api.jquery.com/');
    },
};

window.onload = PageHandler.init;