var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('www.google.com');
qr.make();
document.getElementById('qrcode').innerHTML = qr.createImgTag();


$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });
 
  $('.close-menu').on('click', function() {
    $('.overlay').removeClass('open');
  });
});
