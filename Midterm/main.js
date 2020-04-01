// Grade: 100 / 100


let Blueit = {

    siteApiUrl: '',

    upBtn1: null,
    downBtn1: null,

    init: function( )
    {
        Blueit.siteApiUrl = "https://cislinux.hfcc.edu/~crbanks1";

        Blueit.upBtn1 = document.getElementById( 'up1' );
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementById( 'down1' );
        Blueit.downBtn1.onclick = Blueit.handleDownClick;
        Blueit.upBtn1 = document.getElementById( 'up2' );
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementById( 'down2' );
        Blueit.downBtn1.onclick = Blueit.handleDownClick;
        Blueit.upBtn1 = document.getElementById( 'up3' );
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementById( 'down3' );
        Blueit.downBtn1.onclick = Blueit.handleDownClick;
        Blueit.upBtn1 = document.getElementById( 'up4' );
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementById( 'down4' );
        Blueit.downBtn1.onclick = Blueit.handleDownClick;
    },
    handleUpClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, 1 );
    },
    handleDownClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, -1 );
    },
    sendVoteToApi: function( buttonId, Value )
    {
        try {
            // Value can be 1 or negative one
            $.ajax(Blueit.siteApiUrl, {action: "vote", pid: buttonId, val: Value});
        }
        catch(e)
        {
            console.error("Error occured in function:", e);
        }
    },
    sendNewPostToApi: function( dataObj )
    {
        $.ajax( Blueit.siteApiUrl, {action:"post", pid:buttonId, val:Value, data:dataObj} );
    }
};

window.onload = Blueit.init;