


var qrcode = new QRCode(document.getElementById('qrcode'),{
    height: 150,
    width: 150,
});


function generate() {
    var value = document.getElementById('TA');
    if (!value.value) {
        alert("Ooops Can't Generate for an Empty Space!");
        
       
        value.focus();
        return;
    }

    qrcode.makeCode(value.value);
}