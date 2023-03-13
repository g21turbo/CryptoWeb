// Get HTML elements with IDs bitcoin, ethereum, dogecoin, and shiba-inu
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var shibaInu = document.getElementById("shiba-inu");

// Set up the settings for the API request using the jQuery AJAX function
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cshiba-inu&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

// Make an API request to the Coingecko API using the settings defined above,
// and update the HTML elements with the USD price data returned by the API
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    shibaInu.innerHTML = response['shiba-inu'].usd;
});
