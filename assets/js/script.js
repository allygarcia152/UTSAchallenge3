// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//get password criteria
function getPasswordCriteria(){
  //  ask the user how long they want the password to be
  var length = parseInt(prompt("Please enter how long you would like your password to be."));
  //ask again if the password length does not meet criteria
  while (length < 8 || length > 128 || isNaN(length)){
    alert("Please enter a length between 8 and 128 characters.");
    length = parseInt(prompt("Please enter how long you would like your password to be."));
  }
  // alert user of password length
  alert("Your password length is " + length + " characters long!");

  // ask user if they want upper case characters in their password
  var upperCase = confirm("Would you like upper case letters in your password?");

  // ask user if they want lower case characters in their password
  var lowerCase = confirm("Would you like lower case letters in your password?");

  // ask user if they want UC characters in their password
  var numbers = confirm("Would you like numbers in your password?");
  

  // ask user if they want special characters in their password
  var specialCharacters = confirm("Would you like special characters in your password?");
 
  //ask user to generate a new password if they click cancell on all criteria
  if (lowerCase === false && upperCase === false && specialCharacters === false && numbers=== false){
    alert("You must choose at least one password criteria to generate your secure password. Please try again.")
    return null; 
  };

  //object for all password criteria
  var passwordCriteria = {
    length: length,
    upperCase: upperCase,
    lowerCase:lowerCase,
    numbers: numbers,
    specialCharacters: specialCharacters,
  };
  return passwordCriteria;
};

// execute generate password function when generate button is clicked
function generatePassword(event){
  var passwordCriteria = getPasswordCriteria();
  console.log(passwordCriteria);

  //create strings to pull random password from
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "~!@#$%^&*()-+<>?/_";

  var password = "";

  //create a pool of characters to choose from based on the user's choices
  var characters = "";
  if (passwordCriteria.upperCase) {
    characters += upperCase;
  };
  if (passwordCriteria.lowerCase){
    characters += lowerCase;
  };
  if (passwordCriteria.numbers) {
    characters += numbers;
  };
  if (passwordCriteria.specialCharacters){
    characters += specialCharacters;
  };
  //get a random character from the accepted criteria for as long as the length chosen by the user
  for (var i=0; i < passwordCriteria.length; i++){
    var character = characters.charAt(Math.floor(Math.random()*characters.length));
    password += character;
  };

  return password;
};

//grab a randomcharacter from the pool of characters in the user's pw criteria
// function getRandomCharacter(string){
//   var charactersArray = string.split("");
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
