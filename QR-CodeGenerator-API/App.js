function generateQRCode() {
    let input = document.getElementById("input").value;
    if (input) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, input);
      
      document.getElementById("qrcode-container").style.display = "block";
    } else {
      alert("Please enter a valid URL");
    }
  }