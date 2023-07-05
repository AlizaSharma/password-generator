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
// element that we grabbed reference to
// the method that adds an EVENT to listent for (BROWSER EVENTS)

function generatePassword() {

  var passwordLength = prompt("How long would you like your password to be?");
  console.log("User Enterd: ", passwordLength);
  console.log("type: ", typeof passwordLength);

  // when we get data lets first validate that input
  if(passwordLength <= 8 || passwordLength > 128) {
    alert("Password lengthd musgt be between ....")
    return;
  }
  
  var addLower = confirm("would you like to use lower case character in your password?");
  console.log("User Enterd: ", addLower);
  console.log("type: ", typeof addLower);

  if(addLower == true) {
    avaliableCharacters.push(lower);
  }

  // dependant on the USER ENTERD CHOICES we make logic decisions;
  
  var data = "password";

  return data;
}