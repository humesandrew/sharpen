// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBtn = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
let quantity = window.prompt("How many characters?", "8 minimum");
let quantityChars = Number(quantity);
console.log(quantityChars);
 // now have I saved my quantity as a number, rather than the default string //
if (quantity < 8 || quantity > 128) {
  window.alert("Incorrect characters");
  return
}

let special = window.prompt("How many special characters?", 0);
let quantitySpec = Number(special);
console.log(quantitySpec);




//above will be the password generation logic// 
// below is where you render pasword to the page //

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
