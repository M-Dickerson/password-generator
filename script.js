// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialCharacters = ["!", "@", "#", "$", "%"];

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?");
  var passwordLength = parseInt(userInput);
    
  if (isNaN(passwordLength)) {
      window.alert("Invalid. Please enter a number between 8 and 128");
      return "Try again";
      }
  if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length has to be at minimum 8 characters and at maximum 128)");
        return "Try again";}

  var lowerCase = window.confirm("Do you want to include lowercase letters in your password?")
  var upperCase = window.confirm("Do you want to include uppercase letters in your password?")
  var numeric = window.confirm("Do you want to include numbers in your password?")
  var specialCharacters = window.confirm("Do you want to include lowercase letters in your password?")
}


  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// conditional statements aka if

// validate user selection
// loop
for (var i = 0; i < 128; i++) {
  console.log("")
}