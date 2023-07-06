// Assignment Code
var generateBtn = document.querySelector("#generate");

// let's setup our dataset 
var speicalCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";

// we create a dataset (data holder)
var avaliableCharacters = [];
var newPassword = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be?");
  console.log("User Entered: ", passwordLength);
  console.log("type: ", typeof passwordLength);

  // when we get data lets first validate that input
  if(passwordLength <= 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 chatacters")
    return;
  }
  
  var addLower = confirm("would you like to use lower case character in your password?");
  console.log("User Entered: ", addLower);
  console.log("type: ", typeof addLower);

  if(addLower == true) {
    avaliableCharacters.push(lower);

  }

  var addUpper = confirm("would you like to use upper case character in your password?");
  console.log("User Entered: ", addUpper);
  console.log("type: ", typeof addUpper)
  
  if(addUpper == true) {
    avaliableCharacters.push(upper);
  }

  var addspecialCharacters = confirm("would you like to use special characters in your password?");
  console.log("User Entered: ", addspecialCharacters);
  console.log("type: ", typeof addspecialCharacters)
  
  if(addspecialCharacters == true) {
    avaliableCharacters.push(speicalCharacters);
  }

  // dependant on the USER ENTERD CHOICES we make logic decisions;
  
  var data = "password";

  return data;
}