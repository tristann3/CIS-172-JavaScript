/**
 * Homework 8
 * @grade 10 / 10
 * @notes
 */

let PageManager = {

    init : function()
    {
        let btnTxtFile = document.getElementById("btnTxtFile");
        btnTxtFile.addEventListener("click", PageManager.onReadFile);
        let btnAPIRequest = document.getElementById("btnAPIRequest");
        btnAPIRequest.addEventListener("click", PageManager.onAPIRequest);

        console.log("Page Loaded!");
    },
    onReadFile : function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("output").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "message.txt", true);
        xhttp.send();
    },
    onAPIRequest : function() {
        let txtArtist = document.getElementById("Artist").value;
        let txtSong = document.getElementById("Song").value;
        let url = "https://api.lyrics.ovh/v1/"
        url += txtArtist + "/";
        url += txtSong;
        try {
            PageManager.makeRequest(url);
        }
        catch( e )
        {
            console.error( "Request Error:", e.message );
        }
    },
    makeRequest : function( url )
    {
        $.ajax( {method: "GET", url: url, complete: PageManager.getResponse} );
    },
    getResponse : function ( response )
    {
        console.log("Response received");
        if( response.status == '200' )
        {
            var object = JSON.parse(response.responseText);
            var str = object.lyrics;
            //this line replaces escape characters returned from the API so that the HTML can read and format looks nice
            str = str.replace(/(?:\r\n|\r|\n)/g, '<br>')
            document.getElementById("output").innerHTML = str;
            console.log(response.responseText);
        }
        else if( response.status == '404' )
        {
            console.log("error");
            document.getElementById("output").innerHTML = "Song not found, try again";
        }
    }
}
window.onload = PageManager.init;

