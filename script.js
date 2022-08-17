// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase = ["a", "b"];
let upperCase = ["A", "B"];
let specialChar = ["!", "@", "#"];
let numericalChar = ["1", "2", "3"];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
