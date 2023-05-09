// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBtn = document.querySelector("#password");

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomAlphabet = [];
let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
let randomSpecials = [];

// Write password to the #password input
function writePassword() {
let quantity = window.prompt("How many characters?", "8 minimum");
let quantityChars = Number(quantity);
console.log("Total characters:" + quantityChars);

 // now have I saved my quantity as a number, rather than the default string //
if (quantity < 8 || quantity > 128) {
  window.alert("Incorrect characters");
  return
}

let special = window.prompt("How many special characters?", 0);
if (special > quantityChars) {
  window.alert("Incorrect characters");
  return
}
let quantitySpec = Number(special);
console.log("Total special characters: " + quantitySpec);
let alphabetChars = quantityChars - quantitySpec;
// justworking on total chars (alphabet) and special Chars right now//
for (let i = 0; i < alphabetChars; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  randomAlphabet.push(alphabet[randomIndex]);
 console.log("Randomized alphabet is: " + randomAlphabet);
}


for (let i = 0; i < quantitySpec; i++) {
  let randomIndex = Math.floor(Math.random() * specials.length);
  randomSpecials.push(specials[randomIndex]);
  console.log("Randomized special chars is: " + randomSpecials);
}

function generatePassword() {
  // Combine the randomAlphabet and randomSpecials arrays into a single unsorted array
  let unsorted = randomAlphabet.concat(randomSpecials);

  // Define a custom comparison function to be used by the sort() method
  // The comparison function takes two elements as arguments (a and b)
  // It returns a random number between -0.5 and 0.5, causing the sort() method to randomly shuffle the elements

  // use this in the future (Math.random() - 0.5) to return a quick random number, for technical interviews//
  let randomComparator = function(a, b) {
    return Math.random() - 0.5;
  };

  // Sort the unsorted array using the custom comparison function
  unsorted.sort(randomComparator);

  // Convert the sorted array to a string and print it to the console
  console.log(unsorted.join(''));
}




//above will be the password generation logic// 
// below is where you render pasword to the page //

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
