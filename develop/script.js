// Define character variables

let numbers = '0123456789'
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let symbols = '!@#$%^&*+=-_?/~:;';

// Function to choose which characters user wants password to include

let chooseChars = function () {
  var chooseNumbers = window.confirm('Would you like to include numbers in your password?');

  if (chooseNumbers) {
    console.log('use numbers')
  } else {
    console.log('no numbers')
  }

  var chooseLowerLetters = window.confirm('Would you like to include lowercase letters in your password?')

  if (chooseLowerLetters) {
    console.log('use lowercase letters')
  } else {
    console.log('no lowercase letters')
  }

  var chooseUpperLetters = window.confirm('Would you like to use uppercase letters in your password?')

  if (chooseUpperLetters) {
    console.log('use uppercase letters')
  } else {
    console.log('no uppercase letters')
  }

  var chooseSymbols = window.confirm('Would you like to use symbols in your password?')

  if (chooseSymbols) {
    console.log('use symbols')
  } else {
    console.log('no symbols')
  }
}

// Function to generate the password

let generatePassword = function() {

  var numOfChars = window.prompt('Please choose a length for you password between 8 and 128 characters.');
  
  if (numOfChars > 8 && numOfChars < 128) {
    chooseChars();
  } else {
    alert('Answer invalid. Please choose a number between 8 and 128.')
    return generatePassword();
  }
}

// Calling generate password function when generate button us pushed

if (generateBtn) {
  generatePassword();
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)










 /* let passLength = passChars.length;



    for (var i = 0; i < length; i++) {
      finalPass += passChars.charAt(Math.floor(Math.random() * passLength));
    }
    return finalPass;
  

let ask = function () {
  var includeNumbers = window.confirm('Would you like to include numbers in your password?');
  var includeLetters = window.confirm('Would you like to include letters in your password?');
  var includeSymbols = window.confirm('Would you like to include symbols in your password?');

  if (includeNumbers && includeLetters && includeSymbols) {
    generatePassword();
  } else {
    console.log('must choose vaild response')
  }
}
}; */

