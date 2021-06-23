// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const charNumbers = '123456789'.split('')
const specialChar = `!@#$%^&*()+"',-/:;<>[]{}~|/`.split('')
//Google how to convert string to array
// how can I add the backtick without making the array think it's a string

var chars = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //return "Hello";
  var passwordOutcome = "";
  var passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Password does not meet criteria");
    generatePassword();
  }

  var passwordUppercase = confirm("Do you want Uppercase?");
  var passwordLowercase = confirm("Do you want Lowercase?");
  var passwordCharacter = confirm("Do you want special characters?");
  var passwordNumber = confirm("Do you want numbers?");

  if (passwordUppercase) {
    Array.prototype.push.apply(chars, upperCase)
    //push upperCase to chars array
  }
  if (passwordLowercase) {
    Array.prototype.push.apply(chars, lowerCase)
  }

  if (passwordCharacter) {
    Array.prototype.push.apply(chars, specialChar)
  }

  if (passwordNumber) {
    Array.prototype.push.apply(chars, charNumbers)
  }
  //create the password from chars array with the password length user chose
  // then return the password
  for (var i = 0; i < passwordLength; i++) {
    var randomCharsIndex = Math.floor(Math.random() * chars.length);
    var randomChars = chars[randomCharsIndex];
    passwordOutcome += randomChars;
  }
  return passwordOutcome;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
