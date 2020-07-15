$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });
 
  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});

var a = Math.floor(Math.random() * 2) + 1;
var b = "F" + a;
var c = document.getElementById("logo");
var d = document.getElementById("attribution");
c.style.fontFamily = b;
d.style.fontFamily = b;  

var data = null;
var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});
xhr.open("GET", "https://api.opensea.io/api/v1/assets?owner=0x844289f123E2284a57Bc18264115548d91CC7597&asset_contract_address=0xfbeef911dc5821886e1dda71586d90ed28174b7d&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20");
xhr.send(data);
var e = data.wind.speed;

var f = "https://ipfs.infura.io/ipfs/Qmb9s7oM9Ym9Z2LmEfLNyUScacskQxcDyzwKKh9fzBgubk/asset.jpeg";
document.body.style.backgroundImage = "url(" + f + ")";
