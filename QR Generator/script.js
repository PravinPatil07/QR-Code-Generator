const QR_API = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';

let IMGBox = document.getElementById("imgBox");
let QRImg = document.getElementById("QRImg");
let QRText = document.getElementById("QRText");

function GenerateQR(){
    if(QRText.Value !== '')
    {
    QRImg.src =  QR_API + encodeURIComponent(QRText.value);
    IMGBox.classList.add("show-img");
    }
    else{
        alert("Enter something")
    }
}

QRText.addEventListener("keydown",(e)=>{
    if(e.key == 'Enter'){
        GenerateQR();
    }
})