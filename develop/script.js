// Define Variables

// Computer asks user if they would like their password to include numbers

let finalPass = '';
let passChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%!'
let passLength = passChars.length;

let generatePassword = function(length) {

  for (var i = 0; i < length; i++) {
    finalPass += passChars.charAt(Math.floor(Math.random() * passLength));
  }
  return finalPass;
}

let ask = function() {
  var includeNumbers = window.confirm('Would you like to include numbers in your password?');
  var includeLetters = window.confirm('Would you like to include letters in your password?');
  var includeSymbols = window.confirm('Would you like to include symbols in your password?');

  if (includeNumbers && includeLetters && includeSymbols) {
    generatePassword();
  } else {
    console.log('You must choose a valid answer')
  }
}

ask();

generatePassword(15);



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