// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBtn = document.querySelector("#password");

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
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
    return;
  }

  let special = window.prompt("How many special characters?", 0);
  if (special > quantityChars) {
    window.alert("Incorrect characters");
    return;
  }
  let quantitySpec = Number(special);
  console.log("Total special characters: " + quantitySpec);
  let alphabetChars = quantityChars - quantitySpec;
  // randomly select a number of characters to be uppercase
  let uppercaseChars = Math.floor(Math.random() * alphabetChars);
console.log("Total uppercase characters: " + uppercaseChars);
 
for (let i = 0; i < alphabetChars; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  let randomChar = alphabet[randomIndex];

  // randomly uppercase characters based on the selected quantity
  if (i < uppercaseChars) {
    randomChar = randomChar.toUpperCase();
  }

  randomAlphabet.push(randomChar);
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
    let randomComparator = function (a, b) {
      return Math.random() - 0.5;
    };

    // Sort the unsorted array using the custom comparison function
    unsorted.sort(randomComparator);

    // Convert the sorted array to a string and print it to the console
    return unsorted.join("");
  }

  //above will be the password generation logic//
  // below is where you render pasword to the page //

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// DESCRIBE THE WRITEPASSWORD LOGIC// 
// This code generates a random number of uppercase characters to be included in the password, selects a random character from the `alphabet` array, and then either adds it to the `randomAlphabet` array as is or uppercases it based on whether it has already selected the desired number of uppercase characters. 

// Specifically, the code works as follows:
// - `uppercaseChars` is a randomly generated integer representing the number of uppercase characters to be included in the password.
// - A loop is then used to iterate over the number of `alphabetChars` (which represents the total number of characters to be included in the password that are not special characters), and on each iteration:
//   - A random index is selected using `Math.floor(Math.random() * alphabet.length)`.
//   - The character at the randomly selected index is retrieved from the `alphabet` array using `alphabet[randomIndex]`.
//   - If the current iteration index is less than the randomly generated `uppercaseChars`, the selected character is converted to uppercase using `randomChar.toUpperCase()`.
//   - The selected character is then added to the `randomAlphabet` array using `randomAlphabet.push(randomChar)`.
//   - The current state of the `randomAlphabet` array is logged to the console using `console.log("Randomized alphabet is: " + randomAlphabet)`.
// - A second loop is used to iterate over the `quantitySpec` (which represents the total number of special characters to be included in the password), and on each iteration:
//   - A random index is selected using `Math.floor(Math.random() * specials.length)`.
//   - The character at the randomly selected index is retrieved from the `specials` array using `specials[randomIndex]`.
//   - The selected special character is then added to the `randomSpecials` array using `randomSpecials.push(specials[randomIndex])`.
//   - The current state of the `randomSpecials` array is logged to the console using `console.log("Randomized special chars is: " + randomSpecials)`.