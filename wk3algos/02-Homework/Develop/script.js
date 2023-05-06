// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBtn = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
let quantity = window.prompt("How many characters?", "8 minimum");
if (quantity < 8 || quantity > 128) {
  window.alert("Incorrect characters");
  console.log(Number(quantity));
  return
}



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
