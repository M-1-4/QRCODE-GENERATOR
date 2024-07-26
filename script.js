let container = doucument.querySelector(".container");
let qrInput = doucument.querySelector("#text");
let generateBtn = doucument.querySelector("#generate");
let img = document.querySelector("#qr-image");


generateBtn.onclick = fuNction(){
    let input = qrInput.value.trim()
}


if(!input  ||   input ===PreInput){
    alert("This fieldshould not be empty and different with previous input");
    return


}

else{
    preInput = input;
    generateBtn.innerText = "generating QR CODE......."
    img.src= "C:\Users\marut\OneDrive\Pictures/QR CODE IMAGE.jpeg";
}
img.onload = function(){
    container.classList.add("active")
        generateBtn.innerText = "Generate QR Code"
}


    





