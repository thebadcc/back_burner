var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('www.google.com');
qr.make();
document.getElementById('qrcode').innerHTML = qr.createImgTag(2, 0);
