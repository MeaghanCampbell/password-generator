// Assignment code here
function generatePassword (length) {
  let finalPass = '';
  let passChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%!'
  let passLength = passChars.length;

  for (var i = 0; i < length; i++) {
    finalPass += passChars.charAt(Math.floor(Math.random() * passLength));
  }
  return finalPass;
}

console.log(pass(15));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);