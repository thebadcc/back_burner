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
c.style.fontFamily = b;
  
