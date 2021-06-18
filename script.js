// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c"];
var upperCase = ["A","B","C"];
//Google how to convert string to array

var chars = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //return "Hello";
  var passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if(passwordLength < 8 || passwordLength > 128 || !passwordLength){
      alert("Password does not meet criteria");
      generatePassword();
    }
      
  var passwordUppercase = confirm("Do you want Uppercase?");
  var passwordLowercase = confirm("Do you want Lowercase?");
  var passwordCharacter = confirm("Do you want special characters?");
  var passwordNumber = confirm("Do you want numbers?");
  
  if(passwordUppercase){
  //push upperCase to chars array
  }

  //create the password from chars array with the password length user chose
  // then return the password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
