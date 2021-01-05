// Define character variables

let numbers = '0123456789'
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let symbols = '!@#$%^&*+=-_?/~:;';
let possibleChars = '';
let pass = '';


// Function to choose which characters user wants password to include & create password

  let chooseChars = function (x) {
    var chooseNumbers = window.confirm('Would you like to include numbers in your password?');

    if (chooseNumbers) {
      possibleChars += numbers
    }

    var chooseLowerLetters = window.confirm('Would you like to include lowercase letters in your password?')

    if (chooseLowerLetters) {
      possibleChars += lowerLetters 
    }

    var chooseUpperLetters = window.confirm('Would you like to use uppercase letters in your password?')

    if (chooseUpperLetters) {
      possibleChars += upperLetters
    }

    var chooseSymbols = window.confirm('Would you like to use symbols in your password?')

    if (chooseSymbols) {
      possibleChars += symbols
    }

    if (chooseNumbers === false && chooseLowerLetters === false && chooseUpperLetters === false && chooseSymbols === false) {
      alert('You must choose at least one character')
      return chooseChars();
    }

    for(var i = 0; i < x; i++) {
      pass += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    return pass;
  } 

// Function to start generating password 

let generatePassword = function() {

  var numOfChars = window.prompt('Please choose a length for you password between 8 and 128 characters.');
  
  if (numOfChars > 8 && numOfChars < 128) {
    chooseChars(numOfChars);
    return pass;
  } else {
    alert('Answer invalid. Please choose a number between 8 and 128.')
    return generatePassword();
  }
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




