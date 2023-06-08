
/**
 * Computes password based on user input
 * @author arpit.tiwari
 */
// FUNCTION GENERATING A RANDOM STRING OF THE CHARACTERS CHECKED
function computePassword() {
  const obj = {
    upperCheckBox: document.querySelector("#uppercase").checked,
    lowerCheckBox: document.querySelector("#lowercase").checked,
    numbersCheckBox: document.querySelector("#numbers").checked,
    symbolsCheckBox: document.querySelector("#symbols").checked,
  };  

  let upperCheckBox = document.querySelector("#uppercase").checked;
  let lowerCheckBox = document.querySelector("#lowercase").checked;
  let numbersCheckBox = document.querySelector("#numbers").checked;
  let symbolsCheckBox = document.querySelector("#symbols").checked;

  const possibleUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const possibleLowerCase = "qwertyuiopasdfghjklzxcvbnm";
  const possibleNumbers = "1234567890";
  const possibleSymbols = "!@#$%&_?|/";
  
  let randomNumberArray = [];
  let randomSymbolArray = [];
  let randomUpperCaseArray = [];
  let randomLowerCaseArray = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      
      const passcode = [];
      switch (key) {
        case "upperCheckBox":
          if (upperCheckBox) {
            for (let i = 0; i < 26; i++) {
              randomUpperCaseArray += possibleUpperCase[Math.floor(Math.random() * 26)];            
            }
            passcode.push(randomUpperCaseArray);
          };
          
        case "lowerCheckBox":
          if (lowerCheckBox) {
            for (let i = 0; i < 26; i++) {
              randomLowerCaseArray += possibleLowerCase[Math.floor(Math.random() * 26)];
            }
            passcode.push(randomLowerCaseArray);
          };
          
        case "numbersCheckBox":
          if (numbersCheckBox) {
            for (let i = 0; i < 10; i++) {
              randomNumberArray += possibleNumbers[Math.floor(Math.random() * 10)];            
            }
            passcode.push(randomNumberArray);
          };
          
        case "symbolsCheckBox":
          if (symbolsCheckBox) {
            for (let i = 0; i < 10; i++) {
              randomSymbolArray += possibleSymbols[Math.floor(Math.random() * 10)];
            }
            passcode.push(randomSymbolArray);
          };
                  
        default:
          break;
      }     
      return passcode.join('');   
    }    
  }
}

// GENERATING A PASSWORD OF DESIRED LENGTH USING THE STRING OF CHARACTERS
const generateButton = document.querySelectorAll("#generate");
const display = document.getElementById("result");
generateButton.forEach((element) => {
  element.addEventListener("click", () => {
     
    const passLength = document.querySelector("#length").value;
    let password = [];    
    let output = computePassword();
    console.log(output);
    for (let i = 0; i < passLength; i++) {
      password += output[Math.floor(Math.random() * output.length)]
      computePassword(); 
    }
    display.innerText = password;    
  })   
})

// GETTING THE PASSWORD COPIED TO THE CLIPBOARD
const content = document.getElementById("result");
const clipboard = document.getElementById("clipboard");
clipboard.addEventListener("click", (copyContent = async () => {
  await navigator.clipboard.writeText(content.innerText);
  alert('Content copied to clipboard');
}))

