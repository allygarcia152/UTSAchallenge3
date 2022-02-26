// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//  ask the user how long they want the password to be
var getPasswordLength = function(){
  var length = parseInt(prompt("Please enter how long you would like your password to be."));
  //ask again if the password length does not meet criteria
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Please enter a length between 8 and 128 characters.");
    return null;
  }
  console.log("Your password length is " + length + " characters long!");
  // alert user of password length
  alert("Your password length is " + length + " characters long!");

  return length;
};

// ask user if they want upper case characters in their password
var getUpperCase = function (){
  var upperCase = confirm("Would you like upper case letters in your password?");
  return upperCase;
};

// ask user if they want lower case characters in their password
var getLowerCase = function (){
  var lowerCase = confirm("Would you like lower case letters in your password?");
  return lowerCase;
};

// ask user if they want UC characters in their password
var getNumbers = function (){
  var numbers = confirm("Would you like numbers in your password?");
  return numbers;
};

// ask user if they want special characters in their password
var getSpecialCharacters = function (){
  var specialCharacters = confirm("Would you like special characters in your password?");
  return specialCharacters;
};

var passwordCriteria = {
  length: getPasswordLength(),
  upperCase: getUpperCase (),
  lowerCase: getLowerCase (),
  numbers: getNumbers (),
  specialCharacters: getSpecialCharacters (),
};

function generatePassword(event){
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
