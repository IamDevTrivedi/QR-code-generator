let inputText = document.querySelector('#input-1');
let imageBox = document.querySelector('#image-box');
let qrCode = document.querySelector('#qr-code');


function generateQR() {

    if (inputText.value !== "") {
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        imageBox.classList.add("show-img")
    }
    else {
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000)
    }

}

document.querySelector('.btn').addEventListener("click", generateQR); 
