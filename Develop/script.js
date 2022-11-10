// Assignment Code
var generateBtn = document.querySelector("#generate");

// Text characters for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialCharacters = ["!", "@", "#", "$", "%"];
// Blank lists used for final password
var combined = [];
var doublecombined = [];

function generatePassword() {
  // Initial prompt that asks the user how long they want their password to be
  var passwordLength = window.prompt("How long do you want your password to be?");
    // If the initial criteria entered doesn't match the needed requirements the user is prompted to try again
  if (isNaN(passwordLength)) {
      window.alert("Invalid. Please enter a number between 8 and 128");
      return "Try again";
      }
  if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length has to be at minimum 8 characters and at maximum 128)");
        return "Try again";}
// Asks user if they want the respective characters in their password
  var userLowerCase = window.confirm("Do you want to include lowercase letters in your password?");
  var userUpperCase = window.confirm("Do you want to include uppercase letters in your password?");
  var userNumeric = window.confirm("Do you want to include numbers in your password?");
  var userSpecialCharacters = window.confirm("Do you want to include special characters in your password?");
// Combines each array into one
  if (userLowerCase === true) {
    var combined = lowerCase.concat(combined);
    doublecombined.push(lowerCase);
  }
  if (userUpperCase === true) {
    var combined = upperCase.concat(combined);
    doublecombined.push(upperCase);
  }
  if (userNumeric === true) {
    var combined = numeric.concat(combined);
    doublecombined.push(numeric);
  }
  if (userSpecialCharacters === true) {
    var combined = specialCharacters.concat(combined);
    doublecombined.push(specialCharacters);
  }
// If the user doesn't select anything at all they get the error message try again
  if (!userLowerCase && !userUpperCase && !userNumeric && !userSpecialCharacters) {
      window.alert("Please pick at least one character type for your password");
      return "Try again";
  }
// Generates the password and puts it into the provided box
  doublecombined = doublecombined.join();
  window.alert("Your password is " + passwordLength + " characters long!");
  combined.sort(() => Math.random() - 0.2);
  var lastList = combined.slice(0, passwordLength);
  var finaleList = (lastList.join(''));
  return(finaleList);
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