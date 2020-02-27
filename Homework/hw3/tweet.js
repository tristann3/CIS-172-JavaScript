/**
 * Homework 3
 *
 * Tristan Thompson
 * 2/21/2020
 * 
 * Grade:  10 / 10
 **/
//Declare tweetCollection Array
var tweetCollection = [];

//Accessing elements from HTML
let btnTweet = document.getElementById("Tweet");
btnTweet.addEventListener("click", tweetBuilder);
let btnDumpTweetCollection = document.getElementById("dumpTweetCollection");
btnDumpTweetCollection.addEventListener("click", dumpTweets);

function tweetBuilder()
{
    // Get Elements from HTML page
    let tweetMessage = document.getElementById("tweetMessage");
    let tweetID = document.getElementById("tweetID");
    let tweetLikes = document.getElementById("tweetLikes");
    let tweetShares = document.getElementById("tweetShares");
    let tweetComments = document.getElementById("tweetComments");
    let tweetUsername = document.getElementById("tweetUsername");

    //tweet Object declaration
    let tweet =
        {
            id:    tweetID.value ,
            message:   tweetMessage.value ,
            likes:  tweetLikes.value,
            shares: tweetShares.value,
            comments:   tweetComments.value,
            date:   new Date(),
            username:   tweetUsername.value,
        };
    tweetCollection.push(tweet);
}
function dumpTweets()
{
    console.log(tweetCollection);
}