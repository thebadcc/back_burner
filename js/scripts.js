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

var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var e = JSON.parse(this.responseText)
    var f = Math.floor(Math.random() * 15);
    var g = e.assets[f].image_original_url;
    var h = e.assets[f].name;
    var i = e.assets[f].traits;
    console.log(i);

    document.body.style.backgroundImage = "url(" + g + ")";
    document.getElementById('attribution').innerHTML = i
  }
});
xhr.open("GET", "https://api.opensea.io/api/v1/assets?owner=0x844289f123E2284a57Bc18264115548d91CC7597&asset_contract_address=0xfbeef911dc5821886e1dda71586d90ed28174b7d&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20");
xhr.send();


